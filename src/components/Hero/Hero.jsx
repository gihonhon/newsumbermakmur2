import React from 'react';
import { Tilt } from 'react-tilt';

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
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
          <div className="md:w-[35%]">
          <Tilt options={defaultOptions} >
          <img className="mx-auto md:mx-0 md:ml-auto max-w-full rounded-xl drop-shadow-xl" src="/img1411.jpg" alt="Hero" />
          </Tilt>
            {/* <img className="mx-auto md:mx-0 md:ml-auto max-w-full" src="/img1411.jpg" alt="Hero" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;