import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/v5Xa4cEnTW0"
                title="About Us Video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
