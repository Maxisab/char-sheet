import { createPortal } from 'react-dom';
import { ModalProps } from '../Types/ModalProps';

export default function AncestryModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-md w-full">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

