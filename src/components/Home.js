import React from "react";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 mt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 text-center">
        Hey, I'm Sushant
      </h1>
      <h2 className="text-xl lg:text-2xl text-center max-w-[700px] xl:max-w-[1000px]">
        I'm a{" "}
        <span className="font-bold text-[#EF8354]">Frontend Developer</span>{" "}
        with an engineering background and a passion for creating digital
        solutions. With a strong foundation in HTML, CSS, JavaScript, and modern
        frameworks like React, I focus on building seamless interfaces that are
        not only functional but visually engaging.
      </h2>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-semibold mb-4 flex gap-x-3 items-center xl:mb-12 mt-5 transform transition-all duration-200 hover:scale-110">
          <TbDeviceDesktopCode /> Tech Stack:
        </h2>
        <ul className="flex flex-row gap-5 mt-5">
          <li>
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="HTML"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=css"
              alt="CSS"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=js"
              alt="JavaScript "
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=ts"
              alt="TypeScript"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>

          <li>
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              alt="Tailwind CSS"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=git"
              alt="Git"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="Github"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=firebase"
              alt="firebase"
              className="transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
