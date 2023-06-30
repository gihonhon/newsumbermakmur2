import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
            Kelompok Tani Sumber Makmur 2 beralamat di JL. Sumber Makmur 2 RT 4, Kel. Kariangau, Kec. Balikpapan Barat, Kota Madya Balikpapan.Anggota dari kelompok tani mencakup dari beberapa RT yaitu; RT 4, RT 5, RT 6, dan RT 7.
            </p>
            <p className="text-lg">
            Fokus kami adalah dibidang pertanian dan perternakan, Dalam pertanian, kami menanam sayuran-sayuran dengan metode modern. Dalam perternakan, kami mengembangkan dan menggemukkan sapi dan kambing.  Kami bekerja keras untuk meningkatkan hasil dan kesejahteraan usaha pertanian dan perternakan serta membantu masyarakat Balikpapan dalam memenuhi kebutuhan pangan.
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
