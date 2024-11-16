import React, { useState } from "react";
import { IoMenu, IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const isOpenStyle = isOpen
    ? "flex items-center flex-wrap justify-center space-x-8"
    : "flex items-center space-x-8";

  const isOpenStyleNav = isOpen
    ? "flex flex-col justify-center items-center gap-x-9 z-50 md:hidden w-full justify-center my-3"
    : "flex flex-row gap-x-10 hidden md:block";

  return (
    <header
      className={`top-0 flex justify-center items-center py-5 w-full text-lg bg-opacity-50 border-b border-gray-600 `}
    >
      <div className={isOpenStyle}>
        <a href="https://www.linkedin.com/in/sushant-tripathee-94a753280/">
          <img
            className="rounded-full size-20 transform transition-all duration-200 hover:scale-110 "
            src="https://i.imgur.com/SoEuNHn.png"
            alt="sushant"
          />
        </a>

        <h1 className="md:hidden text-xl font-bold">Sushant Tripathee</h1>
        <button
          className="md:hidden text-3xl transform transition-all duration-200 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoIosArrowUp /> : <IoMenu />}
        </button>

        <nav className={isOpenStyleNav}>
          <span className="hover:underline hover:text-[#df5e4d] mx-10">
            <Link to="/">Home</Link>
          </span>

          <span className="hover:underline hover:text-[#df5e4d] mx-10">
            <Link to="/projects">Projects</Link>
          </span>
          <span className="hover:underline hover:text-[#df5e4d] mx-10">
            <Link to="/about">About me</Link>
          </span>
          <span className="hover:underline hover:text-[#df5e4d] mx-10">
            <Link to="/Contacts">Contact</Link>
          </span>
        </nav>

        <button
          onClick={toggleTheme}
          className="text-2xl transform transition-all duration-200 hover:scale-150"
        >
          {isDarkMode ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
