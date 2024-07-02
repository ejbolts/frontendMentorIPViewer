import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ErrorModal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open, onClose]);

  return createPortal(
    <dialog ref={dialog} className="error-modal">
      {children}
      <button type="button" onClick={onClose} className="error-btn">
        Close
      </button>
    </dialog>,
    document.getElementById("modal")
  );
}
