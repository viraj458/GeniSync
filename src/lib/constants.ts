import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from 'lucide-react';

export const ROUTES = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-500',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-500',
  },
  {
    label: 'Music Generation',
    icon: MusicIcon,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-red-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-yellow-700',
  },
];

export const TOOLS = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    hoverBgColor: 'hover:bg-violet-500/5',
    href: '/conversation',
  },
  {
    label: 'Music Generation',
    icon: MusicIcon,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    hoverBgColor: 'hover:bg-emerald-500/5',
    href: '/music',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    hoverBgColor: 'hover:bg-pink-500/5',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    hoverBgColor: 'hover:bg-orange-500/5',
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    hoverBgColor: 'hover:bg-red-500/5',
    href: '/code',
  },
];
