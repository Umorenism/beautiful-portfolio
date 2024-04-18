import Container from "./Container";
import React from "react";
import { FaInternetExplorer } from "react-icons/fa";
import { FaLinkedinIn, FaPassport, FaRegMessage } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div
      id="home"
      className="relative bg-white flex justify-center items-center min-h-screen "
    >
      <Container>
        <div
          className="
      mx-auto px-8 py-12 flex flex-col items-center justify-center  mt-8"
        >
          <p className="uppercase text-sm tracking-widest text-gray-600 py-4">
            Let's build something together
          </p>
          <h1 className="text-4xl font-bold uppercase py-4 ">
            <span className="text-[#5651e5]">Umoren </span>
            <span className="text-green-600">
              <span className="text-rose-500">Victor</span> portfolio
            </span>
          </h1>
          <h1 className="uppercase p-4 font-2xl font-semibold">
            FrontEnd web developer
          </h1>
          <p className="max-w-[50%] sm:text-start mx-auto text-center text-sm tracking-widest text-gray-600 py-4 ">
            I am a frontend developer with two years working experience,i'm
            willing to be committed in working with or without supervision in
            any tech organization in order to achieved my dream as web
            developer.i'm open for learning new things and also working with a
            team across the continent,while pushing my carrier in frontend i'm
            also learning backend for future purposes
          </p>

          <div className=" grid mt-6 grid-cols-1 md:grid-cols-4 justify-between max-w-[90%] gap-8 flex-col md:flex-row">
            <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
              <FaLinkedinIn size={25} />
            </div>
            <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
              <FaRegMessage size={25} />
            </div>
            <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
              <FaInternetExplorer size={25} />
            </div>
            <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
              <FaPassport size={25} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
