import React from "react";
import "./modalView.css";

export default function ModalView({ children, closeModal }) {
    return (
        <div id="modalBackground">
            <p id="close" onClick={closeModal}>
                X
            </p>
            {children}
        </div>
    );
}
