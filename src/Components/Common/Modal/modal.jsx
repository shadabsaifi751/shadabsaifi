import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

const Modal = ({ isOpen, onClose, children, ref }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return isModalOpen
    ? ReactDOM.createPortal(
        <div
          ref={ref}
          className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${styles.modalOverlay}`}
          onClick={handleClose}
        >
          <div
            className={`relative mx-5 px-10 bg-white shadow-md rounded pt-6 pb-8 z-50 md:mx-auto w-96 ${styles.modal}`}
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
