import React, { useRef, useState } from "react";
import styles from "../../styles/Card.module.css";
import VisibilitySensor from "react-visibility-sensor";

export const Card = ({ p }) => {
  const onChange = () => {};
  return (
    <div
      className={
        "sm:w-1/4 w-full bg-white flex flex-col justify-start items-center \
        px-10 py-6 my-2 sm:mx-6 shadow-xl rounded-md transform hover:scale-105 hover:-translate-y-3 transition-all "
      }
    >
      <div
        className={"my-3 mx-10 rounded-full shadow-lg " + styles.cardBg}
        style={{ backgroundImage: "url(" + p.picture + ")" }}
      ></div>
      <h1 className="text-2xl text-blue-900 mt-3 text-center">{p.name}</h1>
      <h1 className="text-xl text-blue-900 mb-3 text-center">{p.profession}</h1>
      <p className="text-sm text-gray-900">{p.description}</p>
    </div>
  );
};
