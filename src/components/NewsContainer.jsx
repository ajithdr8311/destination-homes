import React from "react";

const NewsContainer = ({ data }) => {
  return (
    <div className="w-full sm:w-2/3 p-2 md:w-3/12 hover:shadow-lg hover:cursor-pointer">
      <img src={data.imgUrl} className="object-cover"></img>
      <p className="text-left mt-2">{data.date}</p>
      <p className="text-left mt-2">{data.title}</p>
    </div>
  );
};

export default NewsContainer;
