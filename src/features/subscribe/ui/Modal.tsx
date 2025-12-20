import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* КНОПКА ЗАКРЫТИЯ */}
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-700 transition"
        >
          ✕
        </button>

        <h2 className="mb-2 text-xl font-semibold">Подписаться</h2>
        <p className="mb-4 text-gray-600">
          Оставьте ваш e-mail для обновлений
        </p>

        <input
          type="email"
          placeholder="Ваш email"
          className="mb-4 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
        >
          Подписаться
        </button>
      </div>
    </div>
  );
};

export default Modal;
