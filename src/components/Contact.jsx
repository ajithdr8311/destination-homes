import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import iconDirection from "../assets/icon-direction.svg";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Destination Homes";
  }, []);

  return (
    <>
      <section className="lg:flex px-8 py-16 bg-[#f7f7f7]">
        <img
          src="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83M2Q3NjdiOWM1MDczZjhmMjI2N2ExYjBhNjFlYWFjMS5qcGVn/webp/1200/1200"
          className="w-full lg:w-1/2 lg:order-2"
        />
        <div className="lg:order-1 mt-4 lg:mt-0">
          <h3 className="text-xl lg:text-3xl font-bold">
            HAVE QUESTIONS? WE ARE HERE TO HELP!
          </h3>
          <p className="font-light w-full text-sm lg:w-[90%] leading-5 lg:leading-8 font-sans mt-4 lg:text-xl">
            Have a question about a floor plan or community? Ready to schedule a
            visit? We are here to help at any stage in your new home search
            process whether you need a home now or just starting to look.
            Searching for your new home should be fun and exciting! We are here
            to help with that. Fill out the contact form below or simply call at
            801-917-5449.
          </p>
        </div>
      </section>

      <ContactForm />

      <section className="md:flex md:justify-center p-8 md:gap-8 text-gray-700">
        <div className="border p-4 md:w-5/12 text-center bg-slate-100">
          <h4 className="text-lg md:text-2xl">Corporate Office</h4>
          <h4 className="text-base md:text-md">
            9350 150 E #220, Sandy, UT 84070
          </h4>
          <h4 className="font-extralight text-xs mt-1">P: (801) 593-9993</h4>
          <h4 className="font-extralight text-xs mt-1">F: (801) 593-9992</h4>
          <button className="mt-4 border bg-red-500 text-white p-2">
            Get Directions
          </button>
        </div>

        <div className="border p-4 md:w-5/12 text-center bg-slate-100 mt-4 md:mt-0">
          <h4 className="text-lg md:text-2xl">DESIGN CENTER </h4>
          <h4 className="text-base md:text-md">
            2095 W. 200 N., Kaysville, Utah 84037
          </h4>
          <h4 className="font-extralight text-xs mt-1">P: (801) 593-9993</h4>
          <h4 className="font-extralight text-xs mt-1">F: (801) 593-9992</h4>
          <button className="mt-4 border bg-red-500 text-white p-2">
            Get Directions
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
