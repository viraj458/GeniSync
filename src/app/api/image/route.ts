import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = 512 } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!replicate.auth) {
      return new NextResponse('Gemini API Key not configured', { status: 500 });
    }

    if (!prompt) {
      return new NextResponse('Prompt required', { status: 400 });
    }

    if (!amount) {
      return new NextResponse('Prompt required', { status: 400 });
    }

    if (!resolution) {
      return new NextResponse('Prompt required', { status: 400 });
    }

    const output = await replicate.run(
      'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
      {
        input: {
          width: parseInt(resolution),
          height: parseInt(resolution),
          prompt: prompt,
          refine: 'expert_ensemble_refiner',
          scheduler: 'K_EULER',
          lora_scale: 0.6,
          num_outputs: parseInt(amount),
          guidance_scale: 7.5,
          apply_watermark: false,
          high_noise_frac: 0.8,
          negative_prompt: "",
          prompt_strength: 0.8,
          num_inference_steps: 25,
        },
      },
    );
    console.log(output);
    
    return NextResponse.json(output);
  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
