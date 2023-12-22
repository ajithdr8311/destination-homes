import React from "react";
import SocialLinks from "./SocialLinks";
import iconHouseWhite from "../assets/icon-equal-housing-white.svg";
import iconHouseBlack from "../assets/icon-equal-housing-black.svg";
import footerBgImg from "../assets/footer-bg.jpg";
import logoMark from "../assets/logo-mark.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBgImg})`,
        backgroundSize: "cover",
      }}
      className="font-oswald text-gray-800 text-center"
    >
      <img src={logoMark} alt="logo mark" className="mx-auto" />
      <p className="mt-8 font-thin">9350 S. 150 E. #220 Sandy, UT</p>
      <ul className="text-sm md:text-base md:flex md:gap-8 justify-center mt-8 font-semibold">
        <li className="hover:text-red-600 cursor-pointer">
          FIND YOUR NEW HOME
        </li>
        <li className="hover:text-red-600 cursor-pointer">GALLERIES</li>
        <li className="hover:text-red-600 cursor-pointer">
          WHY DESTINATION HOMES
        </li>
        <li className="hover:text-red-600 cursor-pointer">HOMEBUYING GUIDE</li>
        <li className="hover:text-red-600 cursor-pointer">CONTACT US</li>
        <li className="hover:text-red-600 cursor-pointer">ACCESSIBILTY</li>
      </ul>

      <ul className="flex gap-8 justify-center mt-8 text-sm md:text-base">
        <li className="hover:text-red-600 cursor-pointer">TERMS</li>
        <li className="hover:text-red-600 cursor-pointer">PRIVACY</li>
        <li className="hover:text-red-600 cursor-pointer">ACCESSIBILTY</li>
      </ul>

      <div className="flex justify-center mt-8">
        <SocialLinks />
      </div>

      <div className="h-32 mt-8 lg:bg-gray-600 text-gray-600 lg:text-white text-xs px-8 pt-6 flex justify-between">
        <img src={iconHouseWhite} className="h-6 w-28 hidden lg:block" />
        <img src={iconHouseBlack} className="h-6 w-28 lg:hidden" />
        <p>&copy;2023 Destination Homes. All Rights Reserved.</p>
        <p className="">
          Site By <span className="font-bold">Builder Designs.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
