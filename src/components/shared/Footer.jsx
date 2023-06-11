import React from "react";
import Icons from "../utils/Icons";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0F0D32] mt-[62px] mb-0 px-24 sm:w-[50em] lg:w-full md:w-full overflow-x-hidden">
      <Icons />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <div>
          <img src={logo} alt="logo" width={200} height={82} />
          <p className="text-gray-300 text-left">
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.
          </p>
        </div>
        <div className="mt-5">
          <h5 className="text-white fonr-bold text-xl">Privacy And Terms</h5>
          <div className="mt-8">
            <p>
              <Link
                className="text-gray-500 hover:text-gray-300 leading-10"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-gray-300 leading-10"
              >
                Terms Condition
              </Link>
            </p>
            <p>
              <Link
                to="/faq"
                className="text-gray-500 hover:text-gray-300 leading-10"
              >
                FAQ
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-5 text-right">
          <h5 className="text-white fonr-bold text-xl">Support</h5>
          <div className="mt-8">
            <p>
              <Link
                to="/affiliate"
                className="text-gray-500 hover:text-gray-300 leading-10"
              >
                Affiliate Link
              </Link>
            </p>
            <p>
              <Link
                to="/contact"
                className="text-gray-500 hover:text-gray-300 leading-10"
              >
                Contact Us
              </Link>
            </p>
            <p>
              <Link
                to="/advertise"
                className="text-gray-500 hover:text-gray-300 leading-10"
              >
                Advertise with us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="text-sm text-white mt-6 pt-2 text-left  flex justify-between border-t border-gray-400">
        <p className="-ml-8">
          © 2023 Newsletter E-mail Service: All Copy right reserved
        </p>
        <div className="flex -mr-8">
          <p className="mr-2">Terms</p>
          <p className="mr-2">Cookie Policy</p>
          <p className="mr-2">Terms</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
