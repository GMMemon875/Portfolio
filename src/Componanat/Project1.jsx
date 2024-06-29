import React from "react";
import Project from "./Data/Project.json";

const Project1 = () => {
  return (
    <>
      <div id="Project">
        <h1
          className="text-center text-4xl font-bold underline italic mt-8"
          id="/Project"
        >
          PROJECT
        </h1>
      </div>
      <div className="flex flex-wrap justify-center  ">
        {Project.map((data) => (
          <div
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] p-4"
            key={data.id}
          >
            <div
              className="card border rounded-md border-black shadow-lg "
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className=" mt-2">
                <img
                  className=" w-60 ml-3 mb-2 "
                  src={data.imagesrc}
                  alt={data.title}
                />
              </div>

              <div className="card-body bg-slate-300 p-4 ">
                <h5 className="card-title text-lg font-bold">{data.title}</h5>
                <p className="card-text mt-2 text-sm">{data.Description}</p>
                <div className="flex">
                  <a
                    href={data.link}
                    className=" bg-orange-600 text-white cursor-pointer text-decoration-none m-2 mt-4 py-2 px-4 rounded-md"
                  >
                    Demo
                  </a>
                  <a
                    href={data.source}
                    target="blank"
                    className="text-white bg-orange-500  cursor-pointer  text-decoration-none m-2 mt-4 py-2 px-4 rounded-md"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project1;
