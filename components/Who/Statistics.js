import React, { useRef } from "react";
import { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../../styles/Who.module.css";

export const Statistics = ({ name, number, id }) => {
  const ref = useRef();
  const { countUp, start, reset } = useCountUp({
    start: 0,
    end: number,
    duration: 3,
  });

  const onChange = (Visibility) => {
    if (Visibility) {
      ref.current.classList.add(styles.enterRight);
      start();
    } else {
      ref.current.classList.remove(styles.enterRight);
      reset();
    }
  };
  return (
    <VisibilitySensor partialVisibility={true} onChange={onChange}>
      <div
        ref={ref}
        className={
          "w-full flex flex-1 flex-grow flex-col justify-start items-start pt-20 my-2 mx-6 "
        }
      >
        <div>
          <div className="text-white text-4xl z-20 px-1">{name}.</div>
          <div
            className="bg-yellow-500 h-6 w-full shadow-md z-10"
            style={{ marginTop: -20 }}
          ></div>
        </div>
        <div className="text-6xl text-yellow-500 py-5">+{countUp}</div>
      </div>
    </VisibilitySensor>
  );
};
