import React from 'react';

const SocialMediaSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Follow Us on Social Media</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <img
              className="h-12 w-12 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
              src="/path/to/instagram.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
            <img
              className="h-12 w-12 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
              src="/path/to/facebook.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.tokopedia.com/your-tokopedia" target="_blank" rel="noopener noreferrer">
            <img
              className="h-12 w-12 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
              src="/path/to/tokopedia.png"
              alt="Tokopedia"
            />
          </a>
          <a href="https://shopee.com/your-shopee" target="_blank" rel="noopener noreferrer">
            <img
              className="h-12 w-12 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
              src="/path/to/shopee.png"
              alt="Shopee"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
