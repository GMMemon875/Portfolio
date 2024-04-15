// import { Link } from "react-router-dom";
import wallpapper from "../Image/new.jpeg";
import React from "react";

const Experties = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="text-center text-4xl font-bold underline pb-16 italic">
          {" "}
          My Experties
        </h1>
      </div>

      <div
        style={{
          backgroundImage: `url(${wallpapper})`,
          backgroundSize: "cover",
        }}
        className="  "
      >
        <div className="flex py-10 items-center" id="/Experties">
          <div className="flex justify-center">
            <div className=" text-slate-100 w-2/3 text-center">
              <h1 className="text-3xl font-semibold text-white italic">
                I love These Technologies{" "}
              </h1>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In a
                voluptatum corporis alias modi incidunt adipisci quasi? Quos
                ipsa quasi tempore minima maxime!
              </p>
              <a
                className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white"
                href="#/Contact"
              >
                {" "}
                Hire Me!
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <div className=" flex w-2/3 space-x-3 justify-center flex-wrap h-fit ">
              <p className="bg-gray-300 w-fit px-3 mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                HTML5:
              </p>
              <p className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                Tailwend CSS:
              </p>
              <p className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                JavaScript:
              </p>
              <p className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                ReactJs:
              </p>
              <p className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                Node.js:
              </p>
              <p className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                Python:
              </p>
              <p className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                Express:
              </p>
              <p className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                MongoDb:
              </p>
              <p className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                MongoDb:
              </p>
              <p className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                BootStrip:
              </p>
              <p className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                Ms Word:
              </p>
              <p className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                BootStrip:
              </p>
              <p className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full">
                Ms Word:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;
