import React from "react";
import BannerIamge from "../Image/selfiecamera_2020-08-23-22-47-01-558.jpg";
import wallpapper from "../Image/new.jpeg";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fronted Diveloper", "React Developer", "Next js Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 10,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${wallpapper})`,
        backgroundSize: "cover",
      }}
      className="main-Cantanier flex items-center "
    >
      <div className=" w-full flex items-center justify-center ">
        <div className="w-2/3 text-white ">
          <h3 className="text-2xl font-semibold italic "> Hi, I am </h3>
          <h1 className="text-2xl font-bold italic"> Mustafa Memon</h1>
          <h2 className="text-2xl font-bold">
            {" "}
            I am A <span ref={el}></span>
          </h2>
          <p>
            I am a fronted devloper from sindh Pakistan, And i am a fresher
            Experience in React Js and Next JS. Feel free to explore my projects
            or contact me for any collaboration!
          </p>

          <div className="space-x-5">
            <span className="hover:bg-orange-600 	  bg-gray-950 border cursor-pointer px-3 py-2 rounded-full">
              <Link
                to="https://www.facebook.com/profile.php?id=100085835297515"
                target="blank"
              >
                <i className=" 	text-white   fa-brands fa-facebook"> </i>
              </Link>
            </span>

            <span className="hover:bg-orange-600 bg-gray-950 border cursor-pointer px-3 py-2 rounded-full">
              <Link
                to="https://www.instagram.com/mustafa.mymon?igsh=ZGUzMzM3NWJiOQ=="
                target="blank"
              >
                <i className=" text-white fa-brands fa-instagram"></i>
              </Link>
            </span>

            <span className="hover:bg-orange-600 bg-gray-950 border cursor-pointer px-3 py-2 rounded-full ">
              <Link
                to="https://www.linkedin.com/in/ghulam-mustafa-memon-a23375234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="blank"
              >
                <i className=" text-white fa-brands fa-linkedin"></i>
              </Link>
            </span>

            <span className="hover:bg-orange-600 bg-gray-950 border cursor-pointer px-3 py-2 rounded-full ">
              <Link to="" target="blank">
                <i className=" text-white fa-solid fa-envelope"></i>
              </Link>
            </span>
          </div>
          <br />

          <a
            className="px-4 py-2 bg-orange-500 shadow rounded-full text-3ml text-decoration-none text-white  "
            href="#/Contact"
          >
            {" "}
            Get in touch
          </a>
        </div>
      </div>

      <div className=" w-full  flex justify-center mt-14 ">
        <img
          className="rounded-lg shadow-3xl blue-500/500 size-px-96 h-96 w-fit my-2"
          src={BannerIamge}
          alt="Picture"
        />
      </div>
    </div>
  );
};

export default Banner;
