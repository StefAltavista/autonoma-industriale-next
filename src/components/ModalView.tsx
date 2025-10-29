import React from "react";
import "./modalView.css";

export default function ModalView({
  children,
  closeModal,
  isOpen,
}: {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={isOpen ? "isOpen" : "isClosed"}
      id="modalBackground"
      onClick={(e) => closeModal()}
    >
      <p id="close" onClick={closeModal}>
        X
      </p>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
