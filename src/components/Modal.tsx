import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/10 backdrop-blur-[2px] fixed inset-0" />
        <Dialog.Content className="fixed drop-shadow-md border border-white top-[50%] left-[50%] 
        max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[900px] z-30
        translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px] focus:outline-none">
            <Dialog.Title className="text-xl text-left uppercase font-bold mb-4">
                {title}
            </Dialog.Title>
            <div className="flex flex-col gap-y-6">
                {children}
            </div>
            <Dialog.Close asChild>
                <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] 
                appearance-none items-center justify-center rounded-full focus:outline-none">
                    <IoMdClose />
                </button>
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;