import React from "react";
import Project from "./Data/Project.json";

const Project1 = () => {
  return (
    <>
      <div className=" " id="/Project">
        <h1 className="text-center text-4xl font-bold underline italic mt-8 ">
          PROJECT
        </h1>
      </div>
      <div className="flex flex-wrap text-center justify-center items-center ml-18">
        {Project.map((data) => {
          return (
            <>
              <div className="my-8 w-[calc(25.33%)] m-5" key={data.id}>
                <div
                  className="card border-1 rounded-md border-black shadow-[10px_10px_15px_15px_rgba(101,175,10,0.5)]"
                  style={{ width: "18rem", height: "65vh", marginLeft: "30px" }}
                  data-aos="zoom-in-left"
                  data-aos-duration="2000"
                >
                  <div className=" p-5 bg-slate-300 ">
                    <img
                      className=" w-80 border-3 border-orange-500"
                      src={data.imagesrc}
                      alt="..."
                    />
                  </div>

                  <div className="card-body bg-slate-300">
                    <h5 className="card-title ">{data.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Project1;
