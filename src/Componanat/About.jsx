import React, { useState } from "react";
import BannerIamge from "../Image/selfiecamera_2020-08-23-22-47-01-558.jpg";

const About = () => {
  const [data, setdata] = useState({
    image: BannerIamge,
    tittle: "JavaScript Developer & React Developer",
    discription1: ` Hi! I'm a software engineer specializing in JavaScript and ReactJS.
`,
    discription2: `I am  a freesher frontend web developer my passion is lies in creating captivating website design and
    implemanting them through fronted developer. i take pride in staying up-to-date with crrante design trande and leveraging
    my creativity to produce visually appealing and user frindly website.through out my career I have developed a deep understanding 
    of user experience (UX) and user Interface (UI) principles by putting myself in the shoes of the end user   `,

    actionButton: {
      tittle: "Read More",
      links: "/Read More",
    },
  });

  return (
    <>
      <div className="bg-slate-200 py-10 " id="/About">
        <h1
          className="text-center text-4xl font-bold  underline pb-16 mt-1 italic"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {" "}
          About Me
        </h1>

        <div className="flex">
          <div
            className="w-full flex justify-center"
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
            className="w-full flex justify-start"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <div className=" space-y-5 w-5/6">
              <h1 className="text-3xl font-semibold italic ">
                {" "}
                {data.tittle}{" "}
              </h1>
              <p className="font-bold italic text-sm"> {data.discription1}</p>

              <p className="font-bold italic  text-sm"> {data.discription2} </p>
              <button className="px-4 py-2  text-sm bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white  hover:bg-orange-400">
                {" "}
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
