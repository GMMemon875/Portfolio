import React from "react";
import Project from "./Data/Project.json";

const Project1 = () => {
  return (
    <>
      <div className=" ">
        <h1 className="text-center text-4xl font-bold underline italic">
          PROJECT
        </h1>
      </div>
      {Project.map((data) => {
        return (
          <>
            <div className=" p-4 my-4" key={data.id}>
              <div
                className="card bg-black text-white"
                style={{ width: "18rem" }}
              >
                <img src={data.imagesrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
    </>
  );
};

export default Project1;
