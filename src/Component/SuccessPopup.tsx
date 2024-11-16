import React from 'react';

interface SuccessPopupProps {
  message: string;
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-center rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h3 className="text-2xl font-semibold text-[#172A3A] mb-4">Thank You!</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#09BC8A] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#00795C] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
