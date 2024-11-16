import React from "react";
import Card from "./Card";

const Projects = () => {
  const ProjectsList = [
    {
      title: "React Dashboard",
      description:
        "A React-based dashboard application that allows users to manage and monitor various activities or data. It features interactive charts, tables, and responsive design for effective data presentation.",
      link: "https://the-oak-nest.netlify.app/",
      github: "https://github.com/GustavoMunizBarrios/the-oak-nest",
      image:
        "https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY",
    },
    {
      title: "Country Info App",
      description:
        "A React app displaying country information such as population, area, and activities. Users can search and filter countries and save relevant data for reference.",
      link: "https://pi-countries-frontend-production.up.railway.app/",
      github: "https://github.com/GustavoMunizBarrios/pi-countries-frontend",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
    },
    {
      title: "Movie Finder",
      description:
        "A React app that lets users search for movies, view detailed information, rate their favorites, and create a personalized list of movies to watch.",
      link: "https://use-popcorn-opal-nine.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/usePopcorn",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
    },
    {
      title: "Character Wiki",
      description:
        "A React-based character wiki for a popular series, featuring an interactive UI to browse through different characters, apply filters, and use a search function.",
      link: "https://rick-and-morty-frontend-production.up.railway.app/",
      github: "https://github.com/GustavoMunizBarrios/rick-and-morty-",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
    },
    {
      title: "Task Manager",
      description:
        "A simple to-do list application built with React, allowing users to add, delete, and filter tasks. Includes day and night modes for enhanced user experience.",
      link: "https://todo-app-one-dun.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/todo-app",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
    },
    {
      title: "Packing List App",
      description:
        "A packing list app built with React to help users organize their travel essentials. Users can mark items as packed, delete them, and sort by description or status.",
      link: "https://travel-list-pi-two.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/travel-list",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
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
                link={link}
                github={github}
                tags={tags}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
