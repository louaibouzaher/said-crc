import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../configVars";
import styles from "../styles/About.module.css";
export const AboutSection = () => {
  const [content, setContent] = useState({});
  useEffect(() => {
    axios.get(api + "/about-images").then((response) => {
      // console.log(response.data);
      setContent(response.data);
    });
  }, []);
  return (
    <div className="w-full sm:h-screen sm:p-12 p-5 pb-20 pt-20 flex sm:flex-row flex-col sm:justify-center sm:items-center bg-blue-900 overflow-x-hidden">
      <div className="sm:w-1/2 flex flex-col justify-center items-start p-4">
        <div className="text-6xl py-3  text-yellow-500">About</div>
        <div className="text-white">{content.aboutDescription}</div>
      </div>
      <div className="flex flex-row sm:w-3/5 w-full mt-10">
        <div
          className={
            "w-1/3 bg-white rounded-md sm:p-4 p-2 sm:pb-14 pb-5 shadow-2xl " +
            styles.fallenImage1
          }
          style={{
            transform: "rotate(-8deg) translateX(10px)",
          }}
          delay={1}
        >
          <img src={content?.Image1 ? content?.Image1?.url : ""} alt="" />
        </div>
        <div
          className={
            "w-1/3 bg-white rounded-md sm:p-4 p-2 sm:pb-14 pb-5 shadow-2xl " +
            styles.fallenImage3
          }
          style={{
            transform: "translateY(-20px) scale(1.3)",
            zIndex: 10,
          }}
          delay={5}
        >
          <img src={content?.Image2 ? content?.Image2?.url : ""} alt="" />
        </div>
        <div
          className={
            "w-1/3 bg-white rounded-md sm:p-4 p-2 sm:pb-14 pb-5 shadow-2xl " +
            styles.fallenImage2
          }
          style={{
            transform: "translate(-30px,30px) scale(1.1) rotate(15deg)",
          }}
          delay={3}
        >
          <img src={content?.Image3 ? content?.Image3?.url : ""} alt="" />
        </div>
      </div>
    </div>
  );
};
