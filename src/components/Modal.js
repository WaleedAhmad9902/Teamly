// src/components/Modal.js

const Modal = ({ workspace, isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if not open
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{workspace.name}</h2>
          <p className="text-gray-600 mb-4">{workspace.description}</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{workspace.price}</p>
          <button 
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200" 
            onClick={onClose} // Close the modal
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  