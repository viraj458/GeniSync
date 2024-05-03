import Heading from '@/components/Heading';
import { MessageSquare } from 'lucide-react';

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation modal"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bf-violet-500/10"
      />
    </div>
  );
};
export default ConversationPage;
