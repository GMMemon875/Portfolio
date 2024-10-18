import React from "react";
import wallpapper from "../Image/new.jpeg";

const Experties = () => {
  return (
    <>
      <div className="mt-2 md:w-full">
        <h1
          className="text-center text-4xl font-bold underline pb-16 italic"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          My Experties
        </h1>
      </div>

      <div
        style={{
          backgroundImage: `url(${wallpapper})`,
          backgroundSize: "cover",
        }}
        className="py-10"
        id="Experties"
      >
        <div></div>
        <div
          className="flex flex-col lg:flex-row items-center justify-between mr-24 ml-16"
          id="/Experties"
        >
          <div
            className="text-center text-slate-100 lg:w-4/3 px-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-3xl font-semibold text-white italic">
              I love These Technologies
            </h1>
            <p className="mt-4 w-80">
              I am a frontend developer from Sindh, Pakistan, and I am a fresher
              with experience in React Js and Next JS. Feel free to explore my
              projects or contact me for any collaboration!
            </p>
            <a
              className="inline-block mt-4 px-4 py-2 bg-orange-500 shadow rounded-full text-lg text-white hover:bg-orange-400"
              href="#/Contact"
            >
              Hire Me!
            </a>
          </div>
          <div className="">
            <div
              className="flex flex-wrap justify-center lg:w-72 mt-8 lg:mt-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {[
                "HTML5",
                "Tailwind CSS",
                "JavaScript",
                "ReactJs",
                "Node.js",
                "Python",
                "Express",
                "MongoDb",
                "Bootstrap",
                "Ms Word",
              ].map((tech, index) => (
                <p
                  key={index}
                  className="bg-gray-300 w-fit px-3 m-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full transition duration-300"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;
