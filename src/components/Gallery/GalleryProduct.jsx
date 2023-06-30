import React from 'react';

const GallerySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Product Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/** */}
          <div className="group relative">
            <img
              className="w-full h-full object-cover rounded"
              src="/path/to/image1.jpg"
              alt="Product 1"
            />
            <div className="overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
          {/** */}
          <div className="group relative">
            <img
              className="w-full h-full object-cover rounded"
              src="/path/to/image2.jpg"
              alt="Product 2"
            />
            <div className="overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
          {/* Add more image items as needed */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
