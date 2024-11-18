import React from "react";
import Card from "./Card";

import JavascriptIcon from "../assets/Icons/JavascriptIcon";
import CssIcon from "../assets/Icons/CssIcon";
import HtmlIcon from "../assets/Icons/HtmlIcon";
import TailwindIcon from "../assets/Icons/TailwindIcon";
import ReactIcon from "../assets/Icons/ReactIcon";
import FirebaseIcon from "../assets/Icons/FirebaseIcon";
import admindashboardimage from "../assets/images/dashboard.png";
import cartimage from "../assets/images/cart.png";
import weatherappimage from "../assets/images/weatherapp.png";

const Projects = () => {
  const TAGS = {
    JAVASCRIPT: {
      name: "JavaScript",
      class: "text-[#777a92fa]",
      icon: JavascriptIcon,
    },
    CSS: {
      name: "CSS",
      class: "text-[#777a92fa]",
      icon: CssIcon,
    },
    FIREBASE: {
      name: "Firebase",
      class: "text-[#777a92fa]",
      icon: FirebaseIcon,
    },
    HTML: {
      name: "HTML",
      class: "text-[#777a92fa]",
      icon: HtmlIcon,
    },
    TAILWIND: {
      name: "Tailwind",
      class: "text-[#777a92fa]",
      icon: TailwindIcon,
    },
    REACT: {
      name: "React",
      class: "text-[#777a92fa]",
      icon: ReactIcon,
    },
  };
  const ProjectsList = [
    {
      title: "Admin Dashboard",
      description:
        "The Admin Dashboard is platform for efficient product, user, and order management. It features secure login, real-time updates, and CRUD functionalities for products and users.",
      github: "https://github.com/sushantbro12/Admin-panel",
      image: admindashboardimage,
      tags: [
        TAGS.REACT,
        TAGS.JAVASCRIPT,
        TAGS.HTML,
        TAGS.TAILWIND,
        TAGS.FIREBASE,
      ],
      link: "https://admin-panel-silk-eta.vercel.app/",
    },
    {
      title: "Shopping Cart",
      description:
        "A feature-rich shopping cart which includes functionalities for adding/removing items, dynamic price calculation, and inventory tracking.",

      github: "https://github.com/sushantbro12/Shopping-Cart",
      image: cartimage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.TAILWIND],
      link: "https://shopping-cart-sage-zeta-82.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A fully featured weather app with hourly and daily forecast.",

      github: "https://github.com/sushantbro12/WeatherApp",
      image: weatherappimage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.TAILWIND],
      link: "https://weather-q9q8g2snw-sushant-tripathees-projects.vercel.app/",
    },
    {
      title: "Project 4",
      description: "Coming Soon",

      github: "",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.TAILWIND, TAGS.HTML],
      link: "",
    },
  ];

  return (
    <div className="w-full lg:w-[740px] xl:w-[1080px] mx-auto pt-16 pb-16">
      <div className="w-full lg:w-[740px] xl:w-[1080px] flex gap-10 xl:gap-16 flex-wrap items-center justify-center">
        {ProjectsList.map(
          ({ image, title, description, tags, link, github }) => (
            <div key={title}>
              <Card
                image={image}
                description={description}
                title={title}
                github={github}
                tags={tags}
                link={link}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
