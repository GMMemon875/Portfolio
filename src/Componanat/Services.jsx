import React, { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setdata] = useState([
    {
      title1: `Web DeVlopement`,
      description1: ``,
      actionButton1: {
        title: "",
        links: "",
      },
    },

    // {

    //     title2: "Web Design",
    //     description2:``,
    //     actionButton2: {
    //         title:'',
    //         links: ''
    //     }
    // },

    // {

    //     title3: "Web Design",
    //     description3:``,
    //     actionButton3: {
    //         title:'',
    //         links: ''
    //     }
    // }
  ]);
  return (
    <>
      <div className=" main cantainar py-14" id="/Service">
        <h1 className="text-center text-4xl font-bold underline italic">
          {" "}
          Services
        </h1>
        <div className=" space-x-5 px-10 flex mt-12">
          <div className="cursor-pointer shadow-lg bg-slate-300 p-4 text-center  rounded-xl ">
            <i className="text-4xl fa-solid fa-code"></i>
            <h1 className="text-2xl">Web DeVlopement</h1>
            <p>
              Welcome to my corner of the web! I'm Mustafa, a passionate web
              developer specializing in crafting clean and responsive websites
              using HTML, CSS, and JavaScript. I focus on delivering
              user-friendly experiences that leave a lasting impression.{" "}
            </p>
            <Link
              to="https://github.com/GMMemon875/Text_convert_Speech"
              target="blank"
            >
              <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl  text-decoration-none text-white">
                {" "}
                Check it out Project!
              </button>
            </Link>
          </div>
          <div className="cursor-pointer shadow-lg  bg-slate-300 p-4 text-center   rounded-xl  ">
            <i className=" text-4xl fa-brands fa-staylinked"> </i>
            <h1 className="text-2xl">UX/UI Developer Designer</h1>
            <p>
              A dedicated UX/UI designer with a passion for crafting seamless
              digital experiences. I've been on a mission to enhance user
              satisfaction by focusing on usability, accessibility, and
              aesthetics.
            </p>
            <Link to="https://github.com/GMMemon875/Portfolio" target="blank">
              <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white">
                {" "}
                Check it out Project!
              </button>
            </Link>
          </div>
          <div className="cursor-pointer shadow-lg  bg-slate-300 p-4 text-center  rounded-xl ">
            <i className=" text-4xl fa-brands fa-react"></i>
            <h1 className="text-2xl">Reactjs Development</h1>
            <p>
              Fronted developer With a strong foundation in JavaScript and a
              keen eye for design, I thrive on turning complex problems into
              elegant solutions. Whether it's architecting the structure of a
              new application, optimizing performance,
            </p>
            <Link to="https://github.com/GMMemon875/News_APP" target="blank">
              <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white">
                {" "}
                Check it out Project!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
