import React from "react";
import Icons from "../utils/Icons";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#0F0D32] mt-[62px] mb-0 px-24 sm:w-[50em] lg:w-full md:w-full">
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
              <a
                className="text-gray-500 hover:text-gray-300 leading-10"
                href=""
              >
                Privacy Policy
              </a>
            </p>
            <p>
              <a
                className="text-gray-500 hover:text-gray-300 leading-10"
                href=""
              >
                Terms Condition
              </a>
            </p>
            <p>
              <a
                className="text-gray-500 hover:text-gray-300 leading-10"
                href=""
              >
                FAQ
              </a>
            </p>
          </div>
        </div>
        <div className="mt-5 text-right">
          <h5 className="text-white fonr-bold text-xl">Support</h5>
          <div className="mt-8">
            <p>
              <a
                className="text-gray-500 hover:text-gray-300 leading-10"
                href=""
              >
                Affiliate Link
              </a>
            </p>
            <p>
              <a
                className="text-gray-500 hover:text-gray-300 leading-10"
                href=""
              >
                Contact Us
              </a>
            </p>
            <p>
              <a
                className="text-gray-500 hover:text-gray-300 leading-10"
                href=""
              >
                Advertise with us
              </a>
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
