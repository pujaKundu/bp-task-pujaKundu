import React, { useState } from "react";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className="bg-white w-full fixed top-0 py-[52px] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ml-16">
            <a href="#" className="text-white text-lg font-semibold">
              <img src={logo} alt="logo" width={200} height={82} />
            </a>
          </div>
          <div className="hidden md:block mr-16">
            <div className="ml-10 flex items-baseline -space-x-2">
              <a
                href="#"
                className="text-black visited:text-[#C82333] hover:text-[#C82333] p-[10px] rounded-md  font-bold"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black hover:text-[#C82333] p-[10px] rounded-md  font-bold"
              ></a>
              <a
                href="#"
                className="text-black hover:text-[#C82333] p-[10px]  rounded-md  font-bold"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-black hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
              >
                Terms Conditions
              </a>
              <a
                href="#"
                className="text-black hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-black hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-black hover:text-[#C82333] px-3 py-2 rounded-md pr-8 font-bold"
              >
                Advertise
              </a>
              <button
                href="#"
                className="text-white bg-[#C82333]  hover:bg-red-700 border-0 px-3 py-2 rounded-md  "
              >
                Join Now
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#C82333] hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <a
              href="#"
              className="block text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md text-base font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-black hover:text-[#C82333] px-3 py-2 rounded-md text-base font-bold"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block text-black hover:text-[#C82333] px-3 py-2 rounded-md text-base font-bold"
            >
              Term Conditions
            </a>
            <a
              href="#"
              className="block text-black hover:text-[#C82333] px-3 py-2 rounded-md text-base font-bold"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-black hover:text-[#C82333] px-3 py-2 rounded-md text-base font-bold"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block text-black hover:text-[#C82333] px-3 py-2 rounded-md text-base font-bold"
            >
              Advertise
            </a>
            <button
              href="#"
              className="text-white bg-[#C82333] hover:bg-red-700 border-0 px-3 py-2 rounded-md  "
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
