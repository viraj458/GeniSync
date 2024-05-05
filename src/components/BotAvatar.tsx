import { Avatar, AvatarImage } from '@/components/ui/avatar';

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8 border border-cyan-300">
      <AvatarImage className="p-1" src="/logo-static.svg" />
    </Avatar>
  );
};
export default BotAvatar;
