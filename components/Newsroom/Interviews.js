import React, { useState, useRef } from "react";
import styles from "../../styles/Interviews.module.css";
import VisibilitySensor from "react-visibility-sensor";

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
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  return (
    <div
      className="flex py-10 justify-center items-center bg-blue-900 w-full"
      id="interviews"
    >
      <div className="p-10 w-2/3 grid grid-cols-2 grid-rows-4 gap-5 bg-blue-900">
        <VisibilitySensor
          partialVisibility={true}
          onChange={(i) => {
            i
              ? ref1.current.classList.add(styles.enterTop)
              : ref1.current.classList.remove(styles.enterTop);
          }}
        >
          <div
            ref={ref1}
            className={
              "transform flex justify-center items-center row-start-1 row-end-3 bg-white rounded-md p-4 shadow-2xl "
            }
          >
            <Video />
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(i) => {
            i
              ? ref2.current.classList.add(styles.enterRight)
              : ref2.current.classList.remove(styles.enterRight);
          }}
        >
          <div
            ref={ref2}
            className={
              " h-48 flex justify-center  items-center bg-white rounded-md p-4 shadow-2xl "
            }
          >
            <Video />
          </div>
        </VisibilitySensor>
        <div className="flex justify-center  items-center row-start-2 row-end-4 bg-blue-900 rounded-md p-4  shadow-2xl">
          <div className="p-10 w-full flex flex-col justify-center items-center">
            <div className="text-white text-4xl py-6">Check Our Interviews</div>
            <div className="text-white text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nostrum eum ipsa culpa molestias quibusdam fugiat labore
              architecto
            </div>
          </div>
        </div>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(i) => {
            i
              ? ref3.current.classList.add(styles.enterLeft)
              : ref3.current.classList.remove(styles.enterLeft);
          }}
        >
          <div
            ref={ref3}
            className="h-48 flex justify-center  items-center bg-white rounded-md p-4 shadow-2xl"
          >
            <Video />
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          intervalDelay={700}
          partialVisibility={true}
          onChange={(i) => {
            i
              ? ref4.current.classList.add(styles.enterBottom)
              : ref4.current.classList.remove(styles.enterBottom);
          }}
        >
          <div
            ref={ref4}
            className="h-48 flex justify-center  items-center  bg-white rounded-md p-4 shadow-2xl col-start-1 col-end-3 "
          >
            <Video />
          </div>
        </VisibilitySensor>
      </div>
    </div>
  );
};

const Video = () => {
  return (
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/QHb_Brp0WnI"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
