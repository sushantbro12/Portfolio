import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Card = ({ image, description, title, link, github }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`fill-current relative w-[22rem] h-[20rem] xl:w-[31rem] rounded-lg flex items-center justify-center overflow-hidden transition-transform hover:scale-105 hover:shadow-lg  ${
        isDarkMode ? "bg-[#2a2c34] " : "bg-[#f3f4f6]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`fill-current w-[22rem] xl:w-[31rem] rounded transition-transform duration-600 ${
          isHovered ? "scale-0" : "scale-100"
        }`}
        src={image}
        alt={title}
      />

      <div
        className={`flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full p-5 box-border transition-transform duration-500 ${
          isDarkMode ? "bg-[#2a2c34]" : "bg-[#f3f4f6]"
        }`}
        style={{
          transform: isHovered ? "rotateX(0deg)" : "rotateX(90deg)",
          transformOrigin: "bottom",
          backfaceVisibility: "hidden",
        }}
      >
        <p p className="m-0 pl-1 text-2xl font-bold group hover:underline">
          <span className="flex items-center">
            {title}
            <span className="ml-2 hidden group-hover:inline">
              <HiExternalLink />
            </span>
          </span>
        </p>
        <p className="mt-2 text-sm leading-relaxed">{description}</p>

        <div className="mt-4">
          <button className="hover:scale-125">
            <FaGithub size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
