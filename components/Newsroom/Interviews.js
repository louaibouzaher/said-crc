import React, { useState, useRef } from "react";
import styles from "../../styles/Interviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

export const Interviews = () => {
  const interviews = [
    {
      video: "https://www.youtube.com/watch?v=QHb_Brp0WnI&t=12s",
      title: "Random title",
      description: "Random Text",
    },
    {
      video: "https://www.youtube.com/watch?v=QHb_Brp0WnI&t=12s",
      title: "Random title",
      description: "Random Text",
    },
    {
      video: "https://www.youtube.com/watch?v=QHb_Brp0WnI&t=12s",
      title: "Random title",
      description: "Random Text",
    },
    {
      video: "https://www.youtube.com/watch?v=QHb_Brp0WnI&t=12s",
      title: "Random title",
      description: "Random Text",
    },
    {
      video: "https://www.youtube.com/watch?v=QHb_Brp0WnI&t=12s",
      title: "Random title",
      description: "Random Text",
    },
  ];
  const ref = useRef();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-blue-900">
      <div
        ref={ref}
        className={" w-full flex "}
        style={{ backgroundColor: "#061c58" }}
      >
        <div className={"flex " + styles.goLeft}>
          {interviews.map((m, id) => (
            <div
              key={id}
              className={
                "flex justify-center items-center w-96 h-72 bg-white rounded-md m-4 p-4 shadow-2xl transition-all transform scale-"
              }
            >
              <iframe
                className="w-full"
                src="https://www.youtube.com/embed/QHb_Brp0WnI"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {id}
            </div>
          ))}
        </div>
        <div className={"flex " + styles.goLeft}>
          {interviews.map((m, id) => (
            <div
              key={id}
              className={
                "flex justify-center items-center w-96 h-72 bg-white rounded-md m-4 p-4 shadow-2xl transition-all transform scale-"
              }
            >
              <iframe
                className="w-full"
                src="https://www.youtube.com/embed/QHb_Brp0WnI"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {id}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-white text-4xl pt-10 ">Random Title</div>
        <div className="text-white text-lg w-1/2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          nostrum eum ipsa culpa molestias quibusdam fugiat labore architecto
        </div>
      </div>
    </div>
  );
};
