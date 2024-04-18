import React from "react";
import Container from "./Container";
import Link from "next/link";

const Project = () => {
  return (
    <div id="project" className="w-full md:min-h-screen">
      <Container>
        <div className="max-w-[1240px] mx-auto px-2 py-14">
          <p className="uppercase text-xl tracking-widest text-blue-500">
            Project
          </p>
          <h1 className="py-4 tracking-widest">What i have build</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-purple-200">
              <img
                src="/crypto.png"
                alt="image"
                className="w-full h-full object-contain rounded-xl group-hover:opacity-10"
              />
              <div className="absolute group-hover:block hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className=" text-2xl font-medium">CRYPTO</h3>
                <p className="py-4 text-2xl font-medium">Reactjs</p>
                <Link href="/">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-xl">
                    More info
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-purple-200">
              <img
                src="/e2.png"
                alt="image"
                className="w-full h-full object-contain rounded-xl group-hover:opacity-10"
              />
              <div className="absolute group-hover:block hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className=" text-2xl font-medium">E-Commerce wears</h3>
                <p className="py-4 text-2xl font-medium">Nextjs</p>
                <Link href="/#property">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-xl">
                    More info
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-purple-200">
              <img
                src="/w.png"
                alt="image"
                className="w-full h-full object-contain rounded-xl group-hover:opacity-10"
              />
              <div className="absolute group-hover:block hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className=" text-2xl font-medium">Mobile phone</h3>
                <p className="py-4 text-2xl font-medium">Reactjs</p>
                <Link href="/">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-xl">
                    More info
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-purple-200">
              <img
                src="/e3.png"
                alt="image"
                className="w-full h-full object-contain rounded-xl group-hover:opacity-10"
              />
              <div className="absolute group-hover:block hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className=" text-2xl font-medium">E-commerce project</h3>
                <p className="py-4 text-2xl font-medium">Reactjs</p>
                <Link href="/">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-xl">
                    More info
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-purple-200">
              <img
                src="/project-status.png"
                alt="image"
                className="w-full h-full object-contain rounded-xl group-hover:opacity-10"
              />
              <div className="absolute group-hover:block hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className=" text-2xl font-medium">Status Project</h3>
                <p className="py-4 text-2xl font-medium">Reactjs</p>
                <Link href="/">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-xl">
                    More info
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-purple-200">
              <img
                src="/e-commerce.png"
                alt="image"
                className="w-full h-full object-contain rounded-xl group-hover:opacity-10"
              />
              <div className="absolute group-hover:block hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className=" text-2xl font-medium">E-Commerce</h3>
                <p className="py-4 text-2xl font-medium">Reactjs</p>
                <Link href="/">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-xl">
                    More info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
