import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full fixed top-0 py-[52px] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ml-16">
            <a href="#" className="text-white text-lg font-semibold">
              <img src={logo} alt="logo" width={200} height={82} />
            </a>
          </div>
          <div className="hidden md:block mr-16">
            <div className="ml-10 flex items-baseline -space-x-2">
              <NavLink
                to="/"
                className="text-black visited:text-[#C82333] hover:text-[#C82333] p-[10px] rounded-md  font-bold"
              >
                Home
              </NavLink>

              <NavLink
                to="/privacy"
                className="text-black visited:text-[#C82333] hover:text-[#C82333] p-[10px]  rounded-md  font-bold"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms"
                className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
              >
                Terms Conditions
              </NavLink>
              <NavLink
                to="/about"
                className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/advertise"
                className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md pr-8 font-bold"
              >
                Advertise
              </NavLink>
              <button className="text-white bg-[#C82333]  hover:bg-red-700 border-0 px-3 py-2 rounded-md  ">
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
          <div className="px-2 pt-2 pb-3 sm:px-3 ">
            <NavLink
              to="/"
              className="text-black visited:text-[#C82333] hover:text-[#C82333] p-[10px] rounded-md  font-bold"
            >
              Home
            </NavLink>

            <NavLink
              to="/privacy"
              className="text-black visited:text-[#C82333] hover:text-[#C82333] p-[10px]  rounded-md  font-bold"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms"
              className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
            >
              Terms Conditions
            </NavLink>
            <NavLink
              to="/about"
              className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md  font-bold"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/advertise"
              className="text-black visited:text-[#C82333] hover:text-[#C82333] px-3 py-2 rounded-md pr-8 font-bold"
            >
              Advertise
            </NavLink>
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
