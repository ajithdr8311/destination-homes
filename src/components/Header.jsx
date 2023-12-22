import React, { useState } from "react";
import logo from "../assets/logo-header.svg";
import maglassWhite from "../assets/icon-magnifying-glass.svg";
import maglassBlack from "../assets/icon-mag-glass-black.svg";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import MenuIcon from "./MenuIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenuClick = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const toggleSearchOpen = () => {
    setIsSearchOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <section className="sm:h-screen">
        <header className="font-oswald h-14 font-bold sm:h-14 md:h-40 px-4 md:px-14 md:pt-8 flex justify-between items-center gap-4 bg-white sm:bg-transparent sm:bg-gradient-to-b from-slate-950 to-transparent">
          <video
            autoPlay
            muted
            loop
            className="absolute left-0 top-0 hidden sm:block sm:-z-10"
          >
            <source
              src="https://s3.amazonaws.com/buildercloud/fffa60a1b1692fc4bc91dd962360ed51/HomePage_short_lr.mp4"
              type="video/mp4"
            ></source>
          </video>
          <button className="md:hidden">
            <img
              src={maglassWhite}
              className="w-5 hidden sm:block"
              onClick={toggleSearchOpen}
            />
            <img
              src={maglassBlack}
              className="w-5 sm:hidden"
              onClick={toggleSearchOpen}
            />
          </button>

          <div
            className={
              `absolute w-[80%] md:w-2/3 top-16 md:top-44 border-4 md:border-8 border-orange-300 left-0 right-0 mx-auto ` +
              (isSearchOpen ? "block" : "hidden")
            }
          >
            <input
              type="text"
              placeholder="Search for Communities, Homes and Plans"
              className="w-full p-2 md:p-4 font-sans placeholder:text-black text-black font-thin"
            />
          </div>

          <img
            src={logo}
            className="w-20 md:hidden cursor-pointer"
            onClick={() => navigate("/")}
          />
          <img
            src={logo}
            className="hidden md:block md:w-30 lg:w-50 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <ul className="hidden lg:flex lg:gap-10 text-white">
            <li className="cursor-pointer">WHERE WE BUILD</li>
            <li className="cursor-pointer">QUICK MOVE-IN HOMES</li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/contact-us")}
            >
              CONTACT US
            </li>
            <button>
              <img
                src={maglassWhite}
                className="w-5 text-white"
                onClick={toggleSearchOpen}
              />
            </button>
          </ul>
          <button
            onClick={toggleMenuClick}
            className="text-black sm:text-white"
          >
            <MenuIcon isMenuOpen={isMenuOpen} />
          </button>
        </header>
        {isMenuOpen && (
          <aside className="absolute z-20 right-0 sm:right-8 sm:top-[5rem]">
            <Menu toggleMenuClick={toggleMenuClick} />
          </aside>
        )}
      </section>

      <main className="font-oswald">
        <img
          src="https://s3.amazonaws.com/buildercloud/3ebf8cd41e5c31144729855b18f8d5dc.jpeg"
          className="object-cover w-screen sm:hidden"
        />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Header;
