import React from "react";
import styles from "../../styles/Newsroom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../configVars";

export const TestimonialsCard = ({ person }) => {
  return (
    <a
      href={person.link}
      target="_blank"
      className="p-1 w-full flex flex-col justify-center items-center"
    >
      <CardImage link={person.Image[0].url} />
      <h1 className="text-white text-xl py-1">{person.name}</h1>
      <p className="w-1/2 text-white text-sm text-center">
        {person.description}
      </p>
    </a>
  );
};

const CardImage = ({ link }) => {
  return (
    <div className="w-full p-5 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl w-24 h-24 z-10 -mr-10"></div>
      <div className="bg-yellow-500 hover:bg-yellow-600 rounded-md w-14 h-14 z-30 -mb-2 mr-24">
        <FontAwesomeIcon
          icon={faPlay}
          size="3x"
          className={"cursor-pointer absolute text-white pt-2 pl-4"}
        />
      </div>
      <div
        className={
          "flex flex-col justify-center items-center rounded-xl w-28 h-28 z-20 absolute overflow-hidden "
        }
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={link} alt="" className={"w-full h-full " + styles.filter} />
      </div>
    </div>
  );
};
