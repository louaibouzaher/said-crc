import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { api } from "../../configVars";
library.add(fab, faAngleDoubleRight);

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(api + "/newsroom-articles").then((response) => {
      // console.log(response.data);
      setArticles(response.data);
    });
  }, []);

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
      <div className="text-gray-200 my-1">
        {" "}
        {new Date (content.date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
      </div>

      <img src={api + content.image[0].url} className="my-2 rounded-md" />
      <div className="text-blue-900 bg-white p-2 rounded-lg my-1">
        {" "}
        {content.publisher}{" "}
      </div>
      <p className="text-sm text-white py-2">{content.description}</p>
      <a
        href={content.link}
        target="_blank"
        className="w-auto my-2 px-2 flex flex-row justify-center items-center bg-yellow-500 shadow-2xl rounded-lg transform hover:translate-x-4 transition-all duration-300  "
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} className="text-blue-900" />
        <div className="text-blue-900 py-1 px-4 "> Learn More </div>
      </a>
    </div>
  );
};
