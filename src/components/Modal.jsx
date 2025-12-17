import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if(!isOpen) return null;
    return(
        <div className='modal' onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <span className='close' onClick={onClose}>&times;</span>
                <h2>Подписаться</h2>
                <p>ОСтавьте ваш e-mail для обновлений</p>
                <input type="email" placeholder='Ваш email'></input>
                <button className='subscribe-btn'>Подписаться</button>
            </div>
        </div>
    )
}
export default Modal;
