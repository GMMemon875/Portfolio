import React, { useState } from "react";

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
        <h1 className="text-center text-4xl font-bold underline "> Services</h1>
        <div className=" space-x-5 px-10 flex mt-12">
          <div className="cursor-pointer shadow-lg bg-slate-300 p-5 text-center rounded-xl">
            <i className="text-4xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web DeVlopement</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              culpa aliquid pariatur sit incidunt atque non tempora, neque illo
              debitis beatae voluptas praesentium nam quod fugit, ducimus, quos
              ullam .{" "}
            </p>
            <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white">
              {" "}
              Check it out!
            </button>
          </div>
          <div className="cursor-pointer shadow-lg   bg-slate-300 p-5 text-center  rounded-xl  ">
            <i className=" text-4xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android DEvelopment</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              nam laboriosam quasi aspernatur quae eos, autem totam, consectetur
              maxime, voluptatibus rem. ducimus, quos ullam totam ducimus, quos
              ullam totam
            </p>
            <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white">
              {" "}
              Check it out!
            </button>
          </div>
          <div className="cursor-pointer shadow-lg  bg-slate-300 p-5 text-center  rounded-xl ">
            <i className=" text-4xl fa-solid fa-server"></i>
            <h1 className="text-4xl">beckEnd DEvelopment</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              aperiam distinctio aut incidunt sint iste nulla, perspiciatis ea
              hic rerum magnam rem quos, placeat error! Voluptas id laudantium
              nostrum incidunt.
            </p>
            <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white">
              {" "}
              Check it out!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
