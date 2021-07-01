import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../configVars";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faAngleDoubleRight);
export const FeaturedArticle = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios.get(api + "/featured-article").then((response) => {
      console.log(response.data);
      setContent(response.data);
    });
  }, []);
  return (
    <div className="w-full sm:p-20 p-6 bg-blue-900">
      <div className="p-2 text-white text-2xl ">Our Latest Article</div>
      <div className="flex sm:flex-row flex-col">
        {content.image && (
          <div
            style={{
              backgroundImage: `url(${content.image.url})`,
              backgroundSize: "cover",
            }}
            alt=""
            className="sm:w-1/2 h-48 sm:h-auto w-full rounded-xl mx-2"
          ></div>
        )}
        {!content.image && "Loading"}
        <div className="sm:w-1/2 w-full flex flex-col p-4 justify-start mx-2">
          <div>
            <h1 className="text-4xl text-white">{content.title}</h1>

            <div className="sm:w-1/2 w-full  bg-gray-800 flex my-4 items-center p-3 rounded-lg shadow-md">
              {content.authorPicture && (
                <div
                  className="w-20 h-20 mx-2 rounded-full"
                  style={{
                    backgroundImage: `url(${content.authorPicture.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(1)",
                  }}
                ></div>
              )}
              {!content && "Loading"}
              <div className="text-gray-500 text-sm p-1">
                {new Date(content.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                <br />
                <span className="text-white text-lg">
                  {" "}
                  {content.authorName}{" "}
                </span>
                <br /> {content.authorRole}
              </div>
            </div>
            <p className="text-white py-2">{content.description}</p>
          </div>
          <Link href={`/article/${content.id}`} className="">
            <div
              className={
                "cursor-pointer sm:mr-auto sm:ml-0 mx-5 px-6 py-1 rounded font-bold flex items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 border-solid border-white border-2 transform hover:translate-x-4 transition-all duration-300"
              }
            >
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="text-white "
                size="2x"
              />
              <div className="text-white text-2xl py-1 px-4 "> Learn More </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
