import React, { useRef, useState } from "react";
import styles from "../../styles/Newsroom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export const TestimonialsCard = ({ person }) => {
  return (
    <div className="p-1 w-full flex flex-col justify-center items-center">
      <CardImage link={person.image} />
      <h1 className="text-white text-xl py-1">{person.name}</h1>
      <p className="w-1/2 text-white text-sm text-center">{person.description}</p>
    </div>
  );
};

const CardImage = ({ link }) => {
  const [isPlaying, setisPlaying] = useState(false);
  const refBtn = useRef(null);
  const handleHover = () => {
    if (!isPlaying) {
      refBtn.current.children[1].classList.add(styles.playButton);
    }
  };
  return (
    <div className="w-full p-5 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl w-24 h-24 z-10 -mr-10"></div>
      <div className="bg-yellow-500 hover:bg-yellow-600 rounded-md w-14 h-14 z-30 -mb-2 mr-24">
        {isPlaying && (
          <FontAwesomeIcon
            onClick={() => setisPlaying(!isPlaying)}
            icon={faPause}
            size="3x"
            className={"cursor-pointer absolute text-white pt-2 pl-4"}
          />
        )}
        {!isPlaying && (
          <FontAwesomeIcon
            onClick={() => setisPlaying(!isPlaying)}
            icon={faPlay}
            size="3x"
            className={"cursor-pointer absolute text-white pt-2 pl-4"}
          />
        )}
      </div>
      <div
        onMouseEnter={() => {
          handleHover();
        }}
        className={
          "flex flex-col justify-center items-center rounded-xl w-28 h-28 z-20 absolute overflow-hidden "
        }
        ref={refBtn}
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
