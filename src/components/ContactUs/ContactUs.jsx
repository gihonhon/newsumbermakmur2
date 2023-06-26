import React from 'react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    // Replace the phone number with your own WhatsApp number
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-6">
              If you have any questions or inquiries, feel free to reach out to us. We are here to assist you!
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleWhatsAppClick}
            >
              Contact via WhatsApp
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img className="mx-auto" src="/path/to/your/image.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
