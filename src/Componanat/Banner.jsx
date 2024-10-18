import React, { useEffect, useRef } from "react";
import BannerImage from "../Image/selfiecamera_2020-08-23-22-47-01-558.jpg";
import wallpaper from "../Image/new.jpeg";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "React Developer", "Next.js Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 10,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
      }}
      className="main-container flex flex-col md:flex-row items-center justify-between p-4 md:p-0 overflow-x-hidden"
    >
      <div
        className="w-full md:w-1/3 ml-14  flex flex-col items-center md:items-start justify-center md:text-left"
        id="Banner"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="w-full text-white p-4">
          <h3 className="text-3xl font-semibold italic">Hi, I am</h3>
          <h1 className="text-2xl font-bold italic">Mustafa Memon</h1>
          <h2 className="font-bold text-sm">
            I am a <span ref={el}></span>
          </h2>
          <p className="text-sm">
            I am a frontend developer from Sindh, Pakistan, and I am a fresher
            with experience in React Js and Next JS. Feel free to explore my
            projects or contact me for any collaboration!
          </p>

          <div className="space-x-5 text-sm mt-4">
            <span className="hover:bg-orange-600 bg-gray-950 border cursor-pointer px-3 py-2 rounded-full">
              <Link
                to="https://www.facebook.com/profile.php?id=100085835297515"
                target="blank"
              >
                <i className="text-white fa-brands fa-facebook"></i>
              </Link>
            </span>

            <span className="hover:bg-orange-600 bg-gray-950 border cursor-pointer px-3 py-2 rounded-full">
              <Link
                to="https://www.instagram.com/mustafa.mymon?igsh=ZGUzMzM3NWJiOQ=="
                target="blank"
              >
                <i className="text-white fa-brands fa-instagram"></i>
              </Link>
            </span>

            <span className="hover:bg-orange-600 bg-gray-950 border cursor-pointer px-3 py-2 rounded-full">
              <Link
                to="https://www.linkedin.com/in/ghulam-mustafa-memon-a23375234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="blank"
              >
                <i className="text-white fa-brands fa-linkedin"></i>
              </Link>
            </span>

            <span className="hover:bg-orange-600 bg-gray-950 border cursor-pointer px-3 py-2 rounded-full">
              <Link to="" target="blank">
                <i className="text-white fa-solid fa-envelope"></i>
              </Link>
            </span>
          </div>
          <br />

          <a
            className="px-4 py-2 bg-orange-500 shadow rounded-full text-decoration-none text-white text-sm"
            href="#/Contact"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          className="rounded-lg h-80 w-auto my-1 mb-4 shadow-2xl border-4 animate-identifier border-orange-500"
          src={BannerImage}
          alt="Picture"
        />
      </div>
    </div>
  );
};

export default Banner;
