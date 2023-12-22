import React from "react";

const ContactForm = () => {
  return (
    <section className="text-center mt-4">
      <h3 className="uppercase text-xl lg:text-4xl">Contact Form</h3>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="sm:grid sm:grid-cols-2 px-8 lg:px-32 text-gray-600 justify-items-start font-bold"
      >
        <div className="flex flex-col w-full lg:w-[80%] p-2">
          <label className="uppercase text-left">First Name</label>
          <input
            type="text"
            className="border border-gray-400 outline-none p-2 font-normal text-base"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[80%] p-2">
          <label className="uppercase text-left">Last Name</label>
          <input
            type="text"
            className="border border-gray-400 outline-none p-2 font-normal text-base"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[80%] p-2">
          <label className="uppercase text-left">Email</label>
          <input
            type="email"
            className="border border-gray-400 outline-none p-2 font-normal text-base"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[80%] p-2">
          <label className="uppercase text-left">Phone</label>
          <input
            type="text"
            className="border border-gray-400 outline-none p-2 font-normal text-base"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[80%] p-2">
          <label className="uppercase text-left">City of Interest</label>
          <select className="border border-gray-400 outline-none p-2 font-normal text-base font-sans">
            <option disabled hidden>
              Select One...
            </option>
            <option>Bengaluru</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className="flex flex-col w-full lg:w-[80%] px-2">
          <label className="uppercase text-left">Community of Interest</label>
          <select className="border border-gray-400 outline-none p-2 font-normal text-base font-sans">
            <option disabled hidden>
              Select One...
            </option>
            <option>Beacon Pointe</option>
            <option>Hill Farms</option>
            <option>Trailside</option>
            <option>Wilcox Farms</option>
          </select>
        </div>
        <div className="flex flex-col w-full lg:w-[80%] p-2">
          <label className="uppercase text-left">
            How did you hear about us?
          </label>
          <select className="border border-gray-400 outline-none p-2 font-normal text-base font-sans">
            <option disabled hidden>
              Select One...
            </option>
            <option>Zillow</option>
            <option>Google</option>
            <option>Friend</option>
          </select>
        </div>
        <div className="flex flex-col w-[90%] p-2 col-span-2">
          <label className="uppercase text-left">Comments/Questions</label>
          <textarea
            placeholder="How can we help you?"
            className="border border-gray-400 outline-none p-2 font-normal text-base"
          ></textarea>
        </div>
        <button className="uppercase bg-red-600 text-white w-max m-2 p-2 rounded-sm">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
