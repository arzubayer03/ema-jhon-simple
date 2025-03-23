import { Button } from '@headlessui/react';

export default function MyButton({ title, icon: Icon }) {
  return (
    <Button className="inline-flex items-center gap-2 rounded-md bg-orange-500 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:ring-2 focus:ring-white">
      {Icon && <Icon />} 
      <span>{title}</span>
    </Button>
  );
}
