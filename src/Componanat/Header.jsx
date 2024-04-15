import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import {link } from 'react-scroll'

const Header = () => {
  const [islogo, setlogo] = useState("Mustafa ");

  const [manulink, setmanulink] = useState([
    { title: "Home", link: "/Home", id: 1 },

    { title: "About", link: "/About", id: 2 },

    { title: " Service", link: "/Service", id: 4 },

    { title: " Experties", link: "/Experties", id: 3 },

    { title: "Project", link: "/Project", id: 5 },

    { title: " Contact", link: "/Contact", id: 5 },
  ]);

  const [hireMe, sethireMe] = useState({
    title: "Download CV!",
    link: "google.com", //  any one use to liks
  });
  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-slate-200 ">
        <div>
          <h1 className="text-3xl font-bold text-orange-500">{islogo}</h1>
        </div>

        <div className="space-x-6 ">
          {/* <Link to="/Project"  className='hover:text-orange-600'> Project</Link>  */}

          <ul>
            <li className="space-x-6 ">
              {manulink.map((manu) => (
                <a
                  key={manu.id}
                  href={`#${manu.link}`}
                  className="text-teal-600 font-bold hover:text-orange-600 text-decoration-none underline-offset-auto"
                >
                  {" "}
                  {manu.title}
                </a>
              ))}
              <Link
                to="https://github.com/GMMemon875"
                target="blank"
                className="text-teal-600 font-bold hover:text-orange-600 text-decoration-none underline-offset-auto"
              >
                {" "}
                Github
              </Link>
            </li>
          </ul>

          {/* <div> 

                                                    {manulink.map(manu =>(


                                                    ))}
                                                </div> */}
        </div>

        <div>
          <Link
            to="https://www.google.com/"
            target="blank"
            className="px-4 py-2 bg-orange-500 shadow rounded-full text-3ml text-decoration-none text-white"
          >
            {hireMe.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

//  import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import necessary components from react-scroll

// const Header = () => {
//     const [islogo, setlogo] = useState("Mustafa");

//     const [manulink, setmanulink] = useState([
//         { title: "Home", link: "/Home", id: 1 },
//         { title: "About", link: "/About", id: 2 },
//         { title: "Skill", link: "/Skill", id: 3 },
//         { title: "Portfolio", link: "/Portfolio", id: 4 },
//         { title: "Project", link: "/Project", id: 5 },
//         { title: "Contact", link: "/Contact", id: 6 },
//         { title: "Github", link: "/ljdbfbdjfjdk", id: 7 },
//     ]);

//     const [hireMe, sethireMe] = useState({
//         title: "Download CV!",
//         link: "/Download CV",
//     });

//     return (
//         <div className="h-20 border main flex justify-between items-center px-16 bg-slate-200">
//             <div>
//                 <h1 className="text-2xl font-bold text-orange-500">{islogo}</h1>
//             </div>
//             <div className="space-x-6">
//                 {manulink.map((link) => (
//                     <ScrollLink
//                         key={link.id}
//                         to={link.link}
//                         spy={true}
//                         smooth={true}
//                         offset={-70} // Adjust offset as per your UI
//                         duration={500}
//                         className="text-teal-600 font-bold hover:text-orange-600 text-decoration-none underline-offset-auto"
//                     >
//                         {link.title}
//                     </ScrollLink>
//                 ))}
//             </div>
//             <div>
//                 <Link
//                     to={hireMe.link}
//                     className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl text-decoration-none text-white"
//                 >
//                     {hireMe.title}
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Header;
