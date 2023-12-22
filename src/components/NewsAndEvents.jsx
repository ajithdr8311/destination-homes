import React from "react";
import news from "../utils/news";
import NewsContainer from "./NewsContainer";

const NewsAndEvents = () => {
  return (
    <section className="mt-8">
      <h2 className="uppercase text-4xl text-gray-700">News & Events</h2>
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {news.map((newsData, index) => (
          <NewsContainer key={index} data={newsData} />
        ))}
      </section>
    </section>
  );
};

export default NewsAndEvents;
