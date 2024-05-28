// import React from "react";
// import Project from "./Data/Project.json";

// const Project1 = () => {
//   return (
//     <>
//       <div className=" " id="/Project">
//         <h1 className="text-center text-4xl font-bold underline italic mt-8 ">
//           PROJECT
//         </h1>
//       </div>
//       <div className="flex flex-wrap text-center justify-center items-center ml-18">
//         {Project.map((data) => {
//           return (
//             <>
//               <div className="my-8 w-[calc(33.33%)] m-5" key={data.id}>
//                 <div
//                   className="card border-1 rounded-md border-black shadow-[10px_10px_15px_15px_rgba(101,175,10,0.5)]"
//                   style={{ width: "18rem", height: "65vh", marginLeft: "30px" }}
//                   // data-aos="zoom-in-left"
//                   // data-aos-duration="2000"
//                 >
//                   <div className=" p-5 bg-slate-300 ">
//                     <img
//                       className=" w-80 border-3 border-orange-500"
//                       src={data.imagesrc}
//                       alt="..."
//                     />
//                   </div>

//                   <div className="card-body bg-slate-300">
//                     <h5 className="card-title ">{data.title}</h5>
//                     <p className="card-text">
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </p>
//                     <a href="#" className="btn btn-primary">
//                       Go somewhere
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Project1;

import React from "react";
import Project from "./Data/Project.json";

const Project1 = () => {
  return (
    <>
      <div id="Project">
        <h1 className="text-center text-4xl font-bold underline italic mt-8">
          PROJECT
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {Project.map((data) => (
          <div
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] p-4"
            key={data.id}
          >
            <div
              className="card border rounded-md border-black shadow-lg"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="p-5 bg-slate-300">
                <img
                  className="w-full border-3 border-orange-500"
                  src={data.imagesrc}
                  alt={data.title}
                />
              </div>

              <div className="card-body bg-slate-300 p-4">
                <h5 className="card-title text-lg font-bold">{data.title}</h5>
                <p className="card-text mt-2 text-sm">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href={data.link}
                  className="btn btn-primary mt-4 bg-orange-500 text-white py-2 px-4 rounded-md"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project1;
