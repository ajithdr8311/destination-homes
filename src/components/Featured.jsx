import React, { useState } from "react";
import FeaturedImage from "./FeaturedImage";
import sfHomes from "../utils/featuredSFHomes";
import townHomes from "../utils/featuredTownHomes";

const Featured = () => {
  const [faturedTab, setFeaturedTab] = useState("singleFamily");

  return (
    <section className="p-12 text-gray-700 hidden lg:block">
      <h3 className="text-4xl uppercase">
        Featured <span>{faturedTab}</span>
      </h3>
      <button
        className={
          "p-4 border mx-2 mt-8 uppercase font-bold tracking-widest " +
          (faturedTab == "singleFamily" ? "bg-red-600 text-white" : "")
        }
        onClick={() => setFeaturedTab("singleFamily")}
      >
        Single Family
      </button>
      <button
        className={
          "p-4 border mx-2 mt-8 uppercase font-bold tracking-widest " +
          (faturedTab == "townHomes" ? "bg-red-600 text-white" : "")
        }
        onClick={() => setFeaturedTab("townHomes")}
      >
        Town Homes
      </button>
      <section className="mt-8 flex justify-center gap-4 flex-wrap">
        {faturedTab === "singleFamily" &&
          sfHomes.map((home, index) => (
            <FeaturedImage key={index} data={home} />
          ))}

        {faturedTab === "townHomes" &&
          townHomes.map((home, index) => (
            <FeaturedImage key={index} data={home} />
          ))}
      </section>
    </section>
  );
};

export default Featured;
