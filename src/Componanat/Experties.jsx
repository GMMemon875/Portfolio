// import { Link } from "react-router-dom";
// import wallpapper from "../Image/new.jpeg";
// import React from "react";

// const Experties = () => {
//   return (
//     <>
//       <div className="mt-2">
//         <h1
//           className="text-center text-4xl font-bold underline pb-16 italic"
//           // data-aos="fade-left"
//           // data-aos-duration="1000"
//         >
//           {" "}
//           My Experties
//         </h1>
//       </div>

//       <div
//         style={{
//           backgroundImage: `url(${wallpapper})`,
//           backgroundSize: "cover",
//         }}
//         className=""
//       >
//         <div className="flex py-10 items-center" id="/Experties">
//           <div className="flex justify-center  ">
//             <div
//               className=" text-slate-100 w-2/3 text-center "
//               // data-aos="fade-right"
//               // data-aos-duration="1000"
//             >
//               <h1 className="text-3xl font-semibold text-white italic">
//                 I love These Technologies{" "}
//               </h1>
//               <p className="mt-4">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. In a
//                 voluptatum corporis alias modi incidunt adipisci quasi? Quos
//                 ipsa quasi tempore minima maxime!
//               </p>
//               <a
//                 className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white"
//                 href="#/Contact"
//               >
//                 {" "}
//                 Hire Me!
//               </a>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <div className=" flex w-2/3 space-x-3 justify-center flex-wrap h-fit text-sm ">
//               <p
//                 className="bg-gray-300 w-fit px-3 mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 // data-aos="fade-left"
//                 // data-aos-duration="1000"
//               >
//                 HTML5:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 data-aos="fade-right"
//                 data-aos-duration="1000"
//               >
//                 Tailwend CSS:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 // data-aos="fade-up"
//                 // data-aos-duration="1000"
//               >
//                 JavaScript:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 // data-aos="fade-down"
//                 // data-aos-duration="1000"
//               >
//                 ReactJs:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 // data-aos="fade-left"
//                 // data-aos-duration="1000"
//               >
//                 Node.js:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 // data-aos="fade-left"
//                 // data-aos-duration="1000"
//               >
//                 Python:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 // data-aos="fade-left"
//                 // data-aos-duration="1000"
//               >
//                 Express:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 // data-aos="fade-left"
//                 // data-aos-duration="1000"
//               >
//                 MongoDb:
//               </p>

//               <p
//                 className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 data-aos="fade-left"
//                 data-aos-duration="1000"
//               >
//                 BootStrip:
//               </p>
//               {/* <p
//                 className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 data-aos="fade-left"
//                 data-aos-duration="1000"
//               >
//                 PHP:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 data-aos="fade-left"
//                 data-aos-duration="1000"
//               >
//                 PHP:
//               </p> */}
//               <p
//                 className="bg-gray-300 w-fit px-3  mt-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 data-aos="fade-down-left"
//                 data-aos-duration="1000"
//               >
//                 BootStrip:
//               </p>
//               <p
//                 className="bg-gray-300 w-fit px-3 mt-1  hover:bg-orange-500 cursor-pointer py-2 rounded-full"
//                 data-aos="fade-down-right"
//                 data-aos-duration="1000"
//               >
//                 Ms Word:
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Experties;

import React from "react";
import wallpapper from "../Image/new.jpeg";

const Experties = () => {
  return (
    <>
      <div className="mt-2">
        <h1
          className="text-center text-4xl font-bold underline pb-16 italic"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          My Experties
        </h1>
      </div>

      <div
        style={{
          backgroundImage: `url(${wallpapper})`,
          backgroundSize: "cover",
        }}
        className="py-10"
        id="Experties"
      >
        <div></div>
        <div className="flex flex-col lg:flex-row items-center justify-between mr-24 ml-16 ">
          <div
            className="text-center text-slate-100 lg:w-4/3 px-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-3xl font-semibold text-white italic">
              I love These Technologies
            </h1>
            <p className="mt-4 w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In a
              voluptatum corporis alias modi incidunt adipisci quasi? Quos ipsa
              quasi tempore minima maxime!
            </p>
            <a
              className="inline-block mt-4 px-4 py-2 bg-orange-500 shadow rounded-full text-lg text-white hover:bg-orange-400"
              href="#/Contact"
            >
              Hire Me!
            </a>
          </div>
          <div className="">
            <div
              className="flex flex-wrap justify-center lg:w-72 mt-8 lg:mt-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {[
                "HTML5",
                "Tailwind CSS",
                "JavaScript",
                "ReactJs",
                "Node.js",
                "Python",
                "Express",
                "MongoDb",
                "Bootstrap",
                "Ms Word",
              ].map((tech, index) => (
                <p
                  key={index}
                  className="bg-gray-300 w-fit px-3 m-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full transition duration-300"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;
