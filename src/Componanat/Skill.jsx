import React from "react";
import Skils from "./Data/Skills.json";

const Skill = () => {
  return (
    <>
      <div className=" " id="/Skill">
        <h1 className="text-center text-4xl font-bold underline italic mb-14">
          Skills
        </h1>
      </div>

      <div className="flex flex-wrap justify-center m-auto bg-slate-300">
        {Skils.map((data) => {
          return (
            <>
              <div
                className=" item w-[calc(33.50%)] m-14 bg-black text-center border-5 animate-identifier border-yellow-400 shadow-[10px_10px_15px_15px_rgba(101,175,10,0.5)]"
                data-aos="fade-down"
                data-aos-duration="1000"
                key={data.id}
              >
                <img
                  className=" w-28 justify-center items-center p-6 m-auto"
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
