import React from 'react';

const LocationSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Store Name</h3>
            <p>123 Main Street</p>
            <p>City, State ZIP</p>
            <p>Country</p>
          </div>
          <div>
            <iframe
              title="Store Location"
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dlongitude!3dlatitude!4m15!1m6!2m5!3m4!1s0x0%3A0x1234567890abcdef!8m2!3dlatitude!4dlongitude!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
