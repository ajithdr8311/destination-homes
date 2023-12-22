import React, { useEffect } from "react";
import HomeImageContainer from "./HomeImageContainer";
import Featured from "./Featured";
import NewsAndEvents from "./NewsAndEvents";
import Gallery from "./Gallery";

const Home = () => {
  useEffect(() => {
    document.title =
      "Premier Salt Lake City New Home Builder | Destination Homes";
  }, []);

  return (
    <section className="text-center p-8 sm:px-0">
      <h2 className="font-bold text-4xl">
        <span className="text-red-600">EXCEPTIONAL HOMES, </span>
        <span className="text-gray-800">LASTING COMMUNITIES</span>
      </h2>

      <div className="sm:flex gap-1 mt-8">
        <HomeImageContainer
          imgAddress="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9iZjJhMzJkMjQyODBjMjA3OGRhMTljNzFmYzQ3YmM5OC5qcGVn/webp/1300/1300"
          title="Single Family Homes"
          desc="Find Your New Home Today"
        />
        <HomeImageContainer
          imgAddress="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC80ZTY4NzAyOGNiMGI5YzkzYmRjYjBjYWI2MDFiODJmYS5qcGVn/exact/webp/2000/1125"
          title="Town Homes"
          desc="Find Your New Home Today"
        />
      </div>

      <Featured />
      <NewsAndEvents />
      <Gallery />
    </section>
  );
};

export default Home;
