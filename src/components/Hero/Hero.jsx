import React from 'react';
import { Tilt } from 'react-tilt';
import backgroundImage from '../../images/background_tani.jpg'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="landing-hero bg-cover bg-center min-h-[40vh] 2xl:min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className='flex flex-col items-center justify-center'>
      <span className="landing-text03 text-white text-sm md:text-lg lg:text-xl xl:text-2xl uppercase tracking-widest">
        kelompok tani sumber makmur
      </span>
      <h1 style={{ fontFamily: 'Dancing Script' }} 
      className="text-white text-3xl duration-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl hover:scale-[1.3] text-center mt-6 sm:mt-8 lg:mt-10">
        <span>Freshly handpicked from</span>
        <br />
        <span>Farmers To You</span>
      </h1>
      </div>
    </div>
    // <section className="bg-gray-900 text-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    //     <div className="md:flex md:items-center md:justify-between">
    //       <div className="md:w-1/2">
    //         <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
    //         <p className="text-lg mb-6">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //           Get Started
    //         </button>
    //       </div>
    //       <div className="md:w-[35%] md:mt-0 mt-4">
    //       <Tilt options={defaultOptions} >
    //       <img className="mx-auto md:mx-0 md:ml-auto max-w-full rounded-xl drop-shadow-xl" src="/img1411.jpg" alt="Hero" />
    //       </Tilt>
    //         {/* <img className="mx-auto md:mx-0 md:ml-auto max-w-full" src="/img1411.jpg" alt="Hero" /> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;