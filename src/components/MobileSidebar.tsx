'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
const MobileSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onOpen}
      >
        <Menu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className='text-white' />
            <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MobileSidebar;
