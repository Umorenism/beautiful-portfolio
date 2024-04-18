import React from "react";
import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonCheckFill } from "react-icons/bs";
import Link from "next/link";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { HiOutlineChevronDoubleUp } from "react-icons/hi2";

const Contact = () => {
  return (
    <div id="contacts" className="w-full lg:h-screen">
      <Container>
        <div className="max-w-[1240px] m-auto px-4 py-10 w-full ">
          <p className="text-xl tracking-wider uppercase text-[#5451e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-4">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 h-full w-full shadow-xl shadow-gray-400 round-xl p-4">
              <div className="lg:p-4 h-full">
                <div className="aspect-video">
                  <img
                    src="/img3.png"
                    alt="img"
                    className="rounded-xl hover:scale-105 ease-in-out duration-300 max-h-[400px] w-full"
                  />
                </div>
                <div>
                  <h2 className="py-2">Name Here</h2>
                  <p className="py-2">FrontEnd Developer</p>
                  <p className="py-4">
                    I'm avaliable for freelance or full-time position.Contact me
                    let talk.
                  </p>
                </div>
                <div>
                  <p className="pt-8 uppercase">Contact with me</p>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
                    <FaLinkedin size={25} />
                  </div>
                  <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
                    <FaGithub size={25} />
                  </div>
                  <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
                    <AiOutlineMail size={25} />
                  </div>
                  <div className=" rounded-full shadow-lg p-4 shadow-gray-300 hover:scale-105 cursor-pointer duration-300 ease-out">
                    <BsPersonCheckFill size={25} />
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase py-2 text-sm" htmlFor="">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase py-2 text-sm">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type=""
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase py-2 text-sm">message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows={10}
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 bg-blue-500 rounded-lg">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="p-4 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 duration-300 ease-in-out rounded-full">
                <HiOutlineChevronDoubleUp
                  size={25}
                  className="text-[#5651e5]"
                />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
