import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/Interviews.module.css";
import VisibilitySensor from "react-visibility-sensor";
import axios from "axios";
import { api } from "../../configVars";

export const Interviews = () => {
 
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    axios.get(api + "/interviews").then((response) => {
      // console.log(response.data);
      setInterviews(response.data);
    });
  }, []);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  return (
    <div
      className="flex py-10 flex-col justify-center items-center bg-blue-900 w-full overflow-hidden"
      id="interviews"
    >
      <div className="p-10 sm:w-2/3 w-full sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-5 bg-blue-900">
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
              "sm:my-0 my-3 transform flex justify-center items-center row-start-1 row-end-3 bg-white rounded-md p-4 shadow-2xl "
            }
          >
            <Video v={interviews[0]} />
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
              "sm:my-0 my-3 h-48 flex justify-center  items-center bg-white rounded-md p-4 shadow-2xl "
            }
          >
            <Video v={interviews[1]} />
          </div>
        </VisibilitySensor>
        <div className="flex justify-center  items-center row-start-2 row-end-4 bg-blue-900 rounded-md p-4  shadow-2xl">
          <div className="p-10 w-full flex flex-col justify-center items-center">
            <div className="text-white text-4xl py-6 text-center">
              Check Our Interviews
            </div>
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
            className="sm:my-0 my-3 h-48 flex justify-center  items-center bg-white rounded-md p-4 shadow-2xl"
          >
            <Video v={interviews[2]} />
          </div>
        </VisibilitySensor>
      </div>
      <a
        href="https://www.youtube.com/channel/UC9Q2nKW-RYy5M5T2fSPAyfA"
        target="_blank"
        className={
          "shadow-xl lg:inline-flex px-6 py-2 rounded font-bold items-center justify-center transition-all duration-500\
               border-2 border-solid border-yellow-500 hover:border-white hover:bg-blue-900 bg-yellow-500 hover:text-white text-gray-900 "
        }
      >
        Check our YouTube Channel{" "}
      </a>
    </div>
  );
};

const Video = ({ v }) => {
  return (
    <>
      {v && (
        <iframe
          className="w-full h-full"
          src={v.link}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};
