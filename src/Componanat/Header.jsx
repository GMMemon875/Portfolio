// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import {link } from 'react-scroll'

// const Header = () => {
//   const [islogo, setlogo] = useState("Mustafa ");

//   const [manulink, setmanulink] = useState([
//     { title: "Home", link: "/Home", id: 1 },

//     { title: "About", link: "/About", id: 2 },

//     { title: " Service", link: "/Service", id: 4 },

//     { title: "Skills", link: "/Skill", id: 6 },

//     { title: " Experties", link: "/Experties", id: 3 },

//     { title: "Project", link: "/Project", id: 5 },

//     { title: " Contact", link: "/Contact", id: 5 },
//   ]);

//   const [hireMe, sethireMe] = useState({
//     title: "Download CV!",
//     link: "", //  any one use to liks
//   });
//   return (
//     <>
//       <div
//         className="h-20 border main  flex justify-between items-center px-16 bg-slate-200 "
//         data-aos="fade-down"
//         data-aos-duration="1000"
//       >
//         <div>
//           <h1 className="text-3xl font-bold text-orange-500 ">{islogo}</h1>
//         </div>

//         <div className="space-x-6 ">
//           {/* <Link to="/Project"  className='hover:text-orange-600'> Project</Link>  */}

//           <ul>
//             <li className="space-x-6">
//               {manulink.map((manu) => (
//                 <a
//                   key={manu.id}
//                   href={`#${manu.link}`}
//                   className="text-teal-600 text-sm font-bold hover:text-orange-600 text-decoration-none underline-offset-auto"
//                 >
//                   {" "}
//                   {manu.title}
//                 </a>
//               ))}
//               <Link
//                 to="https://github.com/GMMemon875"
//                 target="blank"
//                 className="text-teal-600 font-bold text-sm  hover:text-orange-600 text-decoration-none underline-offset-auto"
//               >
//                 {" "}
//                 Github
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <Link
//             to="https://drive.google.com/file/d/1GeXFJs4mOsfQ0qCjO4_YKBT4ORwyeUCI/view?usp=drive_link"
//             target="blank"
//             className="px-4 py-2 bg-orange-500 text-sm  shadow rounded-full text-3ml text-decoration-none text-white"
//           >
//             {hireMe.title}
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [islogo, setlogo] = useState("Mustafa ");
  const [menuOpen, setMenuOpen] = useState(false); // State for managing menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const manulink = [
    { title: "Home", link: "/Home", id: 1 },
    { title: "About", link: "/About", id: 2 },
    { title: "Service", link: "/Service", id: 4 },
    { title: "Skills", link: "/Skill", id: 6 },
    { title: "Experties", link: "/Experties", id: 3 },
    { title: "Project", link: "/Project", id: 5 },
    { title: "Contact", link: "/Contact", id: 7 },
  ];

  const hireMe = {
    title: "Download CV!",
    link: "", // any link you want
  };

  return (
    <>
      <div className="h-20 border flex justify-between items-center px-6 md:px-16 bg-slate-300">
        <div>
          <h1 className="text-3xl font-bold text-orange-500 ">{islogo}</h1>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <div
          className={`md:flex md:items-center  ${
            menuOpen ? "hidden" : "hidden"
          } md:block`}
        >
          <ul className="md:flex md:space-x-6 space-y-4 md:space-y-0">
            {manulink.map((manu) => (
              <li key={manu.id}>
                <a
                  href={`#${manu.link}`}
                  className="text-teal-600 text-sm font-bold hover:text-orange-600"
                >
                  {manu.title}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="https://github.com/GMMemon875"
                target="blank"
                className="text-teal-600 font-bold text-sm hover:text-orange-600"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Link
            to="https://drive.google.com/file/d/1GeXFJs4mOsfQ0qCjO4_YKBT4ORwyeUCI/view?usp=drive_link"
            target="blank"
            className="px-4 py-2 bg-orange-500 text-sm shadow rounded-full text-white"
          >
            {hireMe.title}
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} px-6 `}>
        <ul className="space-y-4 no-underline text-center ">
          {manulink.map((manu) => (
            <li key={manu.id}>
              <a
                href={`#${manu.link}`}
                className="text-teal-600 text-sm font-bold hover:text-orange-600 block"
                onClick={toggleMenu}
              >
                {manu.title}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="https://github.com/GMMemon875"
              target="blank"
              className="text-teal-600 font-bold text-sm hover:text-orange-600 block"
              onClick={toggleMenu}
            >
              Github
            </Link>
          </li>
        </ul>
        <div className="mt-4">
          <Link
            to="https://drive.google.com/file/d/1GeXFJs4mOsfQ0qCjO4_YKBT4ORwyeUCI/view?usp=drive_link"
            target="blank"
            className="px-4 py-2 bg-orange-500 text-sm shadow rounded-full text-white block text-center"
            onClick={toggleMenu}
          >
            {hireMe.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
