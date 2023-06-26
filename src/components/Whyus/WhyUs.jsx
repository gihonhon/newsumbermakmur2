import React from 'react';

const WhyUsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <svg className="h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Pesan kapan saja</h3>
            <p className="text-gray-700 text-center">Anda dapat memesan atau datang langsung ke lokasi untuk membeli hasil panen kami</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Ramah lingkungan</h3>
            <p className="text-gray-700 text-center">Bahan dan metode pengembangbiakan yang kami gunakan terjamin aman dan ramah lingkungan</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9a2 2 0 002-2V6a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0014.586 2H9.414a1 1 0 00-.707.293L7.293 3.707A1 1 0 016 4.414V18a2 2 0 002 2zm0 0V4m0 0L8 5m4-1l4-1" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Hasil panen yang segar</h3>
            <p className="text-gray-700 text-center">Hasil dari panen yang dipetik dijamin segar dan dipanen langsung oleh kami</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Harga terjangkau</h3>
            <p className="text-gray-700 text-center">Kami memberikan harga yang terjangkau untuk anda dan memberikan banyak pilihan untuk pembayaran</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
