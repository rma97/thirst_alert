import { useState } from "react";
import { Dialog } from "@headlessui/react";

type Props = {
  tester: () => void;
};

const Modal: React.FC<Props> = ({ tester }) => {
  // The open/closed state lives outside of the Dialog and is managed by you
  const [isOpen, setIsOpen] = useState(true);

  const close = (): void => {
    setIsOpen(false);
    tester();
  };

  return (
    <Dialog open={isOpen} onClose={() => close()} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4 shadow-2xl">
          <Dialog.Title>Complete your order</Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
