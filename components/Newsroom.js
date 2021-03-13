import React, { useRef } from "react";
import styles from "../styles/Newsroom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhotoVideo,
  faNewspaper,
  faMicrophoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export const NewsroomHero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const handleHover = (e) => {
    e.target.classList.add("bg-white");
    e.target.children[0].classList.add(styles.text);
    e.target.children[1].classList.add(styles.vector);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-900">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-white text-6xl pt-10 ">Media</div>
        <div className="text-white text-xl ">
          You can find all our Media Presence in this section
        </div>
      </div>
      <div className="flex flex-row p-10">
        <div
          onMouseEnter={handleHover}
          className={
            "overflow-hidden cursor-pointer w-52 h-52 rounded-full shadow-2xl flex flex-col justify-center items-center transform translate-x-3 translate-y-32 hover:scale-105 transition-all " +
            styles.bubble
          }
        >
          <div className="text-white text-3xl">Interviews</div>{" "}
          <FontAwesomeIcon
            icon={faPhotoVideo}
            className="transform translate-y-96 text-blue-900"
          />
        </div>
        <div
          onMouseEnter={handleHover}
          className="overflow-hidden cursor-pointer w-64 h-64 rounded-full shadow-2xl flex flex-col justify-center items-center transform hover:scale-105 transition-all"
        >
          <div className="text-white text-4xl">Articles</div>
          <FontAwesomeIcon
            icon={faNewspaper}
            size="1x"
            className="transform translate-y-96 text-blue-900"
          />
        </div>
        <div
          onMouseEnter={handleHover}
          className="overflow-hidden cursor-pointer w-44 h-44 rounded-full shadow-2xl flex flex-col justify-center items-center transform -translate-x-3 translate-y-36 hover:scale-105 transition-all"
        >
          <div className="text-white text-xl pt-4">Testimonials</div>
          <FontAwesomeIcon
            icon={faMicrophoneAlt}
            size="sm"
            className="transform translate-y-80 text-blue-900"
          />
        </div>
      </div>
    </div>
  );
};
