import React, { useRef } from "react";
import styles from "../../styles/Testimonials.module.css";
import VisibilitySensor from "react-visibility-sensor";
import { api } from "../../configVars";
export const Testimonial = ({ t }) => {
  const onChange = (isVisible) => {
    if (isVisible) {
      t.id % 2 == 0
        ? ref.current.classList.add(styles.enterLeft)
        : ref.current.classList.add(styles.enterRight);
    }
  };
  const ref = useRef();
  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(isVisible) => onChange(isVisible)}
    >
      <div
        ref={ref}
        className={
            ((t.id % 2 == 1)
            ? "sm:flex-row "
            : "sm:flex-row-reverse " ) + ` sm:w-3/4 flex flex-col justify-center items-center sm:px-10  pt-10 flex-nowrap `
        }
      >
        <img
          src={api + t.image[0].url}
          alt=""
          className="sm:w-1/5 w-1/2 rounded-full shadow-2xl"
        />
        <div className="p-10">
          <p className="text-blue-900">{t.quote}</p>
          <br />
          <i className="text-gray-900">{t.person}</i>
          <p className="text-gray-900 text-sm">{t.title}</p>
        </div>
      </div>
    </VisibilitySensor>
  );
};
