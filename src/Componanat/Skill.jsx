import React from "react";
import Skils from "./Data/Skills.json";

const Skill = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold underline italic">
          Skils
        </h1>
      </div>

      <div className="flex flex-wrap justify-center m-auto">
        {Skils.map((data) => {
          return (
            <>
              <div
                className="item w-[calc(33.50%)] m-14 bg-black text-center border-5 border-yellow-400 "
                key={data.id}
              >
                <img
                  className=" w-44 justify-center items-center p-6 m-auto"
                  src={data.ImgeSrc}
                  alt=""
                />
                <h3 className=" text-white my-3">{data.title}</h3>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Skill;
