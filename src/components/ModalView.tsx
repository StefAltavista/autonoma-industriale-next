import React from "react";
import "./modalView.css";

export default function ModalView({
    children,
    closeModal,
}: {
    children: React.ReactNode;
    closeModal: () => void;
}) {
    return (
        <div id="modalBackground">
            <p id="close" onClick={closeModal}>
                X
            </p>
            {children}
        </div>
    );
}
