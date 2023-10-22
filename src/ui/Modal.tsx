import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
  hide: () => void;
}

function Modal({ children, hide }: Props) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target!.closest(".overlay") && !target.closest(".modal"))
        return hide();
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [hide]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: "0.15" }}
        className="overflow-hidden overlay z-50 fixed top-0 left-0 bottom-0 right-0 backdrop-blur-[3px] h-screen w-screen bg-black bg-opacity-20"
      >
        <div className="modal overflow-hidden shadow-md rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default Modal;
