import React from "react";
import arrowRight from "../assets/arrowright.svg";

const HomeImageContainer = ({ imgAddress, title, desc }) => {
  return (
    <article className="relative text-white cursor-pointer w-full sm:w-1/2 mt-2 sm:mt-0">
      <img src={imgAddress} className="w-full h-full object-cover"></img>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 justify-center items-center bg-[rgba(0,0,0,0.3)] transition ease-in-out hover:bg-transparent">
        <h3 className="uppercase text-sm md:text-4xl font-bold absolute bottom-2 left-2 sm:relative">
          {title}
        </h3>
        <p className="text-xs md:text-xl hidden sm:block">{desc}</p>
        <button className="rounded-full p-2 bg-red-600 text-white absolute bottom-2 right-2 sm:relative">
          <img src={arrowRight} className="w-3 h-3 sm:w-5 sm:h-5"></img>
        </button>
      </div>
    </article>
  );
};

export default HomeImageContainer;
