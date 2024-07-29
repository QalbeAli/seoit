import { FC } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal if the click is outside the modal content
    if ((e.target as HTMLDivElement).id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleOuterClick}
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        
        <div className="flex">
          <div className="w-1/2 hidden md:flex">
            <img
              src="/contact.webp" // Update this path to your actual image path
              alt="Consultation"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4 text-gray-600">Any questions or remarks? We'll get back to you within 24 hours.</p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Enter your message</label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
                  rows={4}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
