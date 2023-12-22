import React from "react";
import SocialLinks from "./SocialLinks";
import { useNavigate } from "react-router-dom";

const Menu = ({ toggleMenuClick }) => {
  const navigate = useNavigate();

  return (
    <ul className="bg-white text-gray-800 p-5 sm:w-80 font-oswald border-2">
      <li
        className="absolute right-3 bg-black text-white px-2 cursor-pointer"
        onClick={toggleMenuClick}
      >
        X
      </li>
      <li
        className="hover:text-red-500 cursor-pointer px-2 py-4 border-b-[1px] border-gray-500 "
        onClick={() => navigate("/")}
      >
        HOME PAGE
      </li>
      <li className="hover:text-red-500 cursor-pointer px-2 py-4 border-b-[1px] border-gray-500 ">
        FIND YOUR HOME
      </li>
      <li className="hover:text-red-500 cursor-pointer px-2 py-4 border-b-[1px] border-gray-500 ">
        PHOTO & VIDEO GALLERY
      </li>
      <li className="hover:text-red-500 cursor-pointer px-2 py-4 border-b-[1px] border-gray-500 ">
        WHY DESTINATION HOMES
      </li>
      <li className="hover:text-red-500 cursor-pointer px-2 py-4 border-b-[1px] border-gray-500 ">
        HOME BUYING GUIDE
      </li>
      <li
        className="hover:text-red-500 cursor-pointer px-2 py-4"
        onClick={() => navigate("/contact-us")}
      >
        CONTACT
      </li>
      <li>
        <SocialLinks />
      </li>
    </ul>
  );
};

export default Menu;
