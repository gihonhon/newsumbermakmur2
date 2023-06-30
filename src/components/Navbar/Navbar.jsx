import React, { useState, useEffect } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import LogoSmDua from '../../images/logowhitektsm2.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for the dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <nav className={`bg-[#609966] ${isScrolled ? 'fixed top-0 z-50 left-0 right-0 drop-shadow-2xl shadow-2xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="w-[52px] mx-2" src={LogoSmDua} alt="Logo" />
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-xl">Sumber Makmur 2</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <button
                onClick={() => handleNavLinkClick('/')}
                className={`px-3 py-2 mx-2  ${location.pathname === '/' ? ' border-b-2 rounded-none border-[#40513B] text-[#40513B]' : 'hover:bg-[#EDF1D6] text-white rounded-md hover:text-[#40513B]'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavLinkClick('/about')}
                className={`px-3 py-2 mx-2  ${location.pathname === '/about' ? ' border-b-2 rounded-none border-[#40513B] text-[#40513B]' : 'hover:bg-[#EDF1D6] text-white rounded-md hover:text-[#40513B]'}`}
              >
                About
              </button>
              <div className="relative inline-block text-left mx-2">
                {/* Dropdown button */}
                <button
                  onClick={toggleDropdown}
                  className={`px-3 py-2 flex items-center ${location.pathname === '/farm/animal' || location.pathname === '/farm/plant' ? 'border-b-2 rounded-none border-[#40513B] text-[#40513B]' : 'hover:bg-[#EDF1D6] text-white hover:text-[#40513B] rounded-md focus:outline-none'}`}
                >
                  Farm
                  <MdOutlineArrowDropDown className='mx-1'/>
                  {/** Icon */}
                </button>
                {/* Dropdown content */}
                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <button
                        onClick={() => {
                          handleNavLinkClick('/farm/animal');
                          closeDropdown();
                        }}
                        className={`block px-4 py-2 w-full text-sm ${location.pathname === '/farm/animal' ? 'bg-[#609966] text-white' : 'hover:bg-[#609966] hover:text-white'}`}
                        role="menuitem"
                      >
                        Animal
                      </button>
                      <button
                        onClick={() => {
                          handleNavLinkClick('/farm/plant');
                          closeDropdown();
                        }}
                        className={`block px-4 py-2 w-full text-sm ${location.pathname === '/farm/plant' ? 'bg-[#609966] text-white' : 'hover:bg-[#609966] hover:text-white'}`}
                        role="menuitem"
                      >
                        Plant
                      </button>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">
            Home
          </a>
          <a href="#about" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">
            About
          </a>
          <a href="#services" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">
            Services
          </a>
          <a href="#contact" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
