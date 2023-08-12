import '../Estilos/Modal.css'
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {

    return (
        <div className="modal-container" style={{ display: isOpen ? 'grid' : 'none' }}>
            <div className="modal-body">
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
                <h1>prueba</h1>
            </div>
        </div>
    );
}

export default Modal;
