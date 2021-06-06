import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faAngleDoubleRight);

export const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum eum ipsa culpa molestias quibusdam fugiat labore architecto",
      date: "Sat June 5th, 2021",
      link: "link",
      image: "/assets/awarness.jpg",
    },
    {
      id: 2,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum eum ipsa culpa molestias quibusdam fugiat labore architecto",
      date: "Sat June 5th, 2021",
      link: "link",
      image: "/assets/awarness.jpg",
    },
    {
      id: 3,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum eum ipsa culpa molestias quibusdam fugiat labore architecto",
      date: "Sat June 5th, 2021",
      link: "link",
      image: "/assets/awarness.jpg",
    },
    {
      id: 4,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum eum ipsa culpa molestias quibusdam fugiat labore architecto",
      date: "Sat June 5th, 2021",
      link: "link",
      image: "/assets/awarness.jpg",
    },
    {
      id: 5,
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum eum ipsa culpa molestias quibusdam fugiat labore architecto",
      date: "Sat June 5th, 2021",
      link: "link",
      image: "/assets/awarness.jpg",
    },
  ];
  return (
    <div
      id="articles"
      className="py-20 sm:px-0 px-4 w-full flex flex-col justify-center items-center bg-blue-900"
    >
      <div className="text-6xl text-yellow-500 text-center">
        {" "}
        Articles about us.{" "}
      </div>
      <div className="my-4 text-2xl text-white text-center">
        {" "}
        {
          "Different newspapers & magazines wrote about our work, check these articles for more information."
        }{" "}
      </div>
      <div className="w-10/12 flex justify-center items-stretch flex-wrap">
        {articles.map((a) => {
          return <Article content={a} key={a.id} />;
        })}
      </div>
    </div>
  );
};

const Article = ({ content }) => {
  return (
    <div className="sm:w-1/4 w-full flex flex-col justify-start  items-start bg-blue-900 rounded-2xl p-4 m-4 shadow-2xl border-white border-solid border-2">
      <h1 className="text-2xl text-white mt-3 text-center">{content.title}</h1>
      <img src={content.image} className="my-2 rounded-md" />
      <p className="text-sm text-white">{content.description}</p>
      <a
        href={content.link}
        target="_blank"
        className="my-2 px-2 flex flex-row justify-center items-center bg-yellow-500 shadow-2xl rounded-lg"
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} className="text-blue-900" />
        <div className="text-blue-900 p-1 "> Learn More </div>
      </a>
    </div>
  );
};
