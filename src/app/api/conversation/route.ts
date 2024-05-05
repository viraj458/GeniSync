import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req: Request) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const { userId } = auth();
    const body = await req.json();
    const { message, history } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!genAI.apiKey) {
      return new NextResponse('Gemini API Key not configured', { status: 500 });
    }

    if (!message) {
      return new NextResponse('Message required', { status: 400 });
    }
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 300,
      },
    });

    const result = await chat.sendMessageStream(message);
    let text = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText;
    }
    return NextResponse.json({ role: 'model', parts: [{ text: text }] });
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
