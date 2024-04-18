import React from "react";
import Image from "next/image";
import Container from "./Container";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full md:min-h-screen p-2 flex items-center py-12"
    >
      <Container>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
          <div className="py-2">
            <p className="text-3xl text-[#5151e5] py-2 font-bold">About me</p>
            <h2 className="text-sm uppercase text-gray-500">Who i am?</h2>
            <p className="py-2 font-bold text-xl">
              I am a frontend web developer
            </p>
            <p className="py-4">
              My name is Umoren Victor Emmanuel,i'm from Akwa Ibom state,i deed
              my graduation in B.A in philosophy with a second class upper
              division.However,my journey as weB developer has not been an easy
              tasked both mentally and physically.I begin my journey as web
              developer immediately after my service with CodeLab Academy where
              i was introduce into the basic workflow in building website.
            </p>
            <p className="mb-8">
              My first tasked was on ui ux design which we use to design both
              desktop and mobile design before converting it into coding.in the
              course of my training i was introduce in the basic of web
              developing such as HTML,CSS,JAVASCRIPT,TYPESCRIPT and REACTJS
              framwork.this has really enable me to mobile a responsive web
              application with Tailwindcss.
            </p>
            <button className="py-3 px-8 border rounded-sm shadow-lg shadow-purple-500 hover:translate-y-1 duration-300 ease-in">
              views
            </button>
          </div>
          <div className="w-full h-auto shadoe-gray-400 rounded-full flex justify-center items-center p-4 hover:scale-105 ease-in duration-300">
            <img
              src="/umoren.png"
              alt="image"
              className="aspect-video w-full min-h-[500px] rounded-xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
