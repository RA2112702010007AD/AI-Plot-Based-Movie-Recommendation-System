import React, { useEffect } from 'react';
import { CloseIcon } from './Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title: string | undefined;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Large view of poster for ${title}`}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl max-h-[90vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageUrl} alt={`Poster for ${title}`} className="block object-contain w-full h-full" />
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-colors"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
