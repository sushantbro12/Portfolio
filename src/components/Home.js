import React from "react";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 mt-20 pb-[100px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 text-center">
        Hey, I'm Sushant
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl text-center max-w-[90%] md:max-w-[700px] lg:max-w-[900px]">
        I'm a{" "}
        <span className="font-bold text-[#EF8354]">Frontend Developer</span>{" "}
        with an engineering background and a passion for creating digital
        solutions. With a strong foundation in HTML, CSS, JavaScript, and modern
        frameworks like React, I focus on building seamless interfaces that are
        not only functional but visually engaging.
      </h2>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex gap-x-3 items-center xl:mb-12 mt-5 transform transition-all duration-200 hover:scale-110">
          <TbDeviceDesktopCode /> Tech Stack:
        </h2>
        <ul className="flex flex-wrap justify-center gap-5 mt-5">
          {[
            { src: "html", alt: "HTML" },
            { src: "css", alt: "CSS" },
            { src: "js", alt: "JavaScript" },
            { src: "ts", alt: "TypeScript" },
            { src: "react", alt: "React" },
            { src: "tailwind", alt: "Tailwind CSS" },
            { src: "git", alt: "Git" },
            { src: "github", alt: "Github" },
            { src: "firebase", alt: "Firebase" },
          ].map((icon) => (
            <li key={icon.alt}>
              <img
                src={`https://skillicons.dev/icons?i=${icon.src}`}
                alt={icon.alt}
                className="w-12 md:w-14 lg:w-16 transition-transform transform hover:scale-110 hover:rotate-180 duration-500 ease-in-out"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
