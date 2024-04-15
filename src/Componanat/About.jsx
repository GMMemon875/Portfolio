import React, { useState } from "react";
import BannerIamge from "../Image/selfiecamera_2020-08-23-22-47-01-558.jpg";

const About = () => {
  const [data, setdata] = useState({
    image: BannerIamge,
    tittle: "Java Developer & react DEveloper",
    discription1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores eveniet iure consequatur nobis dolores fugit eligendi,
    quod doloremque aliquid officia quis quas reiciendis cum eos amet cupiditate hic rerum!
`,
    discription2: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quibusdam nulla, 
    molestias voluptate rem quam in asperiores ea eius provident ex!
    Debitis animi doloremque est qui, quod dolore. Optio, molestiae!`,

    actionButton: {
      tittle: "Read More",
      links: "/Read More",
    },
  });

  return (
    <>
      <div className="bg-slate-200 py-10 " id="/About">
        <h1 className="text-center text-4xl font-bold underline pb-16 mt-1">
          {" "}
          About Me
        </h1>

        <div className=" flex">
          <div className="w-full flex justify-center">
            <img
              className=" rounded-full shadow-3xl blue-500/500 size-px-96 h-96"
              src={data.image}
              alt=""
            />
          </div>

          <div className="w-full flex justify-start">
            <div className=" space-y-5 w-2/">
              <h1 className="text-35l font-semibold "> {data.tittle} </h1>
              <p> {data.discription1}</p>

              <p> {data.discription2} </p>
              <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white  hover:bg-orange-400">
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
