import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SideBar = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/sushant-tripathee-94a753280/",
      style: "rounded-tr-lg",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={25} />,
      href: "https://github.com/sushantbro12",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={25} />,
      href: "mailto:sushantbro12@gmail.com",
      style: "rounded-br-lg",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, name, icon, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-56 h-14 px-4 ml-[-160px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 text-gray-200 shadow-lg ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-bold"
              target="_blank"
              rel="noreferrer"
            >
              <span>{name}</span>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
