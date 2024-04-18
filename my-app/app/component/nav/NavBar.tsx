"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiVectorlogozone } from "react-icons/si";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", changeShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed top-0 w-full h-20 shadow-xl z-[100] bg-black text-white"
          : "fixed top-0 w-full h-20 text-blue-800  z-[100]"
      }
    >
      <div className="w-full  h-full flex justify-between items-center px-2 2xl:px-16">
        <h1 className=" flex text-3xl text-blue-600 font-bold animate-bounce duration-300">
          <SiVectorlogozone size={35} />
          <span className="text-rose-500 ">Portfolio</span>
        </h1>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-0">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-0">About</li>
            </Link>
            <Link href="/#skill">
              <li className="ml-10 text-sm uppercase hover:border-0">Skills</li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:border-0">
                Projects
              </li>
            </Link>
            <Link href="/#contacts">
              <li className="ml-10 text-sm uppercase hover:border-0">
                Contacts
              </li>
            </Link>
          </ul>
          {/* button */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* menu open */}
      <div
        className={nav ? "fixed left-0  h-screen top-0 w-full bg-black/70" : ""}
      >
        {/* overlay */}
        <div
          className={
            nav
              ? "left-0 fixed top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500 text-blue-500 font-semibold"
              : "left-[-100%] fixed top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between w-full items-center">
              <SiVectorlogozone size={35} className="text-blue-700 font-bold" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-xl shadow-gray-200 cursor-pointer p-3"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together..
              </p>
            </div>
          </div>

          {/* meun */}

          <div className="py-4 flex flex-col">
            <ul onClick={handleNav}>
              <Link href="/">
                <li className="py-4 text-sm uppercase">home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm uppercase">About</li>
              </Link>
              <Link href="/#skill">
                <li className="py-4 text-sm uppercase">Skills</li>
              </Link>
              <Link href="/#project">
                <li className="py-4 text-sm uppercase">Project</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm uppercase">Contact</li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect here..
              </p>
              <div className="flex items-center justify-between my-4 sm:w-[80%] w-full">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas duration-300">
                  <FaLinkedin size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas duration-300">
                  <FaGithub size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas duration-300">
                  <AiOutlineMail size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas duration-300">
                  <BsPersonLinesFill size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
