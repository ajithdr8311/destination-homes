import React from "react";
import gallery from "../utils/gallery";

const Gallery = () => {
  return (
    <section className="mt-8">
      <h2 className="text-4xl text-gray-700 uppercase">Photo Gallery</h2>
      <div className="flex flex-wrap mt-8">
        {gallery.map((photo) => {
          return (
            <article
              key={photo.title}
              className="relative w-full sm:w-1/3 h-72 cursor-pointer"
            >
              <img
                src={photo.imgUrl}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center hover:bg-[rgba(250,0,0,0.7)] hover:text-white transition ease-in">
                <p className="uppercase text-xl text-white font-bold">
                  {photo.title}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
