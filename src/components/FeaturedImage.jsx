import React from "react";
import bedIcon from "../assets/icon-beds.svg";
import bathIcon from "../assets/icon-baths.svg";
import sqftIcon from "../assets/icon-sqft.svg";
import arrowRight from "../assets/arrowright.svg";

const FeaturedImage = ({ data }) => {
  return (
    <div className="w-80 border shadow-md hover:cursor-pointer hover:scale-105 transition ease-in-out">
      <img
        src={data.imgUrl}
        alt={data.name}
        className="w-full object-cover"
      ></img>
      <div className="flex justify-between px-8 mt-2">
        <p className="text-sm w-2/4 text-left">
          <span className="font-bold">{data.coOrds}</span> {data.details}
        </p>
        <h4 className="bg-slate-300 w-min h-min p-1 text-gray-900 font-semibold">
          ${data.price}
        </h4>
      </div>
      <p className="text-red-600 text-left w-2/3 mt-6 px-8">{data.name}</p>

      <footer className="mt-8 flex px-4 mb-4">
        <div className="w-max px-2">
          <img src={bedIcon} alt="img" className="w-6 h-6 mx-auto" />
          <p className="text-xs uppercase w-full">{data.noOfBeds}beds</p>
        </div>
        <div className="w-max px-2">
          <img src={bathIcon} alt="img" className="w-6 h-6 mx-auto" />
          <p className="text-xs uppercase w-full">{data.noOfBaths} bath tubs</p>
        </div>
        <div className="w-max px-2">
          <img src={sqftIcon} alt="img" className="w-6 h-6 mx-auto" />
          <p className="text-xs uppercase w-full">{data.sqft} sq feet</p>
        </div>
        <img
          src={arrowRight}
          className="w-8 h-8 bg-red-600 rounded-full p-2 ml-auto self-center mr-6"
        />
      </footer>
    </div>
  );
};

export default FeaturedImage;
