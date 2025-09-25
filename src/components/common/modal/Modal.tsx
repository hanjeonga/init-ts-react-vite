import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as styles from "./Modal.style";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  closeOnBackdropClick = true,
  closeOnEsc = true,
  ariaLabelledBy,
  ariaDescribedBy,
}) => {
  const [closing, setClosing] = useState(false);

  // ESC 키 닫기
  useEffect(() => {
    if (!closeOnEsc) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") triggerClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeOnEsc]);

  // body 스크롤 막기
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // 애니메이션 종료 후 실제 close
  const triggerClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 200); // 애니메이션 시간과 맞춤
  };

  return createPortal(
    <div
      className={styles.backdrop}
      data-state={closing ? "closing" : "open"}
      role="presentation"
      onClick={() => closeOnBackdropClick && triggerClose()}
    >
      <div
        className={styles.modal}
        data-state={closing ? "closing" : "open"}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={triggerClose} className={styles.closeButton}>
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
