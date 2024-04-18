import React from "react";
import Container from "./Container";
import { FaCss3, FaHtml5, FaJava, FaNodeJs } from "react-icons/fa6";
import { FaFigma, FaReact, FaTable } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skill" className="w-full md:min-h-screen lg:h-screen p-2">
      <Container>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-32">
          <p className="py-4 text-4xl text-[#5150e5]">Skills</p>
          <h2 className="py-2">What i can do</h2>

          <div className="grid md:grid--2 xl:grid-cols-4 gap-8 py-8 ">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <FaHtml5 size={35} className="text-red-500" />
                </div>
                <div>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <FaCss3 size={35} className="text-red-500" />
                </div>
                <div>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <FaJava size={35} className="text-red-500" />
                </div>
                <div>
                  <h3>JAVASCRIPT</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <FaNodeJs size={35} className="text-green-600" />
                </div>
                <div>
                  <h3>NODEJS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiTypescript size={35} className="text-green-700" />
                </div>
                <div>
                  <h3>TYPESCRIPT</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <FaFigma size={35} className="text-red-500" />
                </div>
                <div>
                  <h3>FIGMA</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <FaReact size={35} className="text-blue-500" />
                </div>
                <div>
                  <h3>ReactJS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiTailwindcss size={35} className="text-blue-500" />
                </div>
                <div>
                  <h3>TAILWINDS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
