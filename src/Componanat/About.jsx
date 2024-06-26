import React, { useState } from "react";
import BannerImage from "../Image/selfiecamera_2020-08-23-22-47-01-558.jpg";

const About = () => {
  const [data, setData] = useState({
    image: BannerImage,
    title: "JavaScript Developer & React Developer",
    description1: `Hi! I'm a software engineer specializing in JavaScript and ReactJS.`,
    description2: `I am a fresher frontend web developer. My passion lies in creating captivating website designs and
    implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging
    my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding
    of user experience (UX) and user interface (UI) principles by putting myself in the shoes of the end user.`,

    actionButton: {
      title: "Read More",
      link: "/Read More",
    },
  });

  return (
    <>
      <div className="bg-slate-200 py-10" id="/About">
        <h1
          className="text-center text-4xl font-bold underline pb-16 mt-1 italic"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center">
          <div
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <img
              className=" rounded-full shadow-2xl border-4 border-orange-500 animate-identifier blue-500/500 size-px-96 h-80"
              src={data.image}
              alt=""
            />
          </div>

          <div
            className="w-full md:w-1/2 flex justify-start"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="space-y-5 px-4 md:px-0 w-full md:w-5/6">
              <h1 className="text-3xl font-semibold italic">{data.title}</h1>
              <p className="font-bold italic text-sm">{data.description1}</p>

              <p className="font-bold italic text-sm">{data.description2}</p>
              <button className="px-4 py-2 text-sm bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white hover:bg-orange-400">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
