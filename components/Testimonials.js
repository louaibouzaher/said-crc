import React, { useRef } from "react";
import styles from "../styles/Testimonials.module.css";
import VisibilitySensor from "react-visibility-sensor";

export const Testimonials = () => {
  const onChange = (isVisible, n) => {
    switch (n) {
      case 1:
        if (isVisible) {
          ref1.current.classList.add(styles.enterLeft);
        } else {
          ref1.current.classList.remove(styles.enterLeft);
        }

        break;
      case 2:
        if (isVisible) {
          ref2.current.classList.add(styles.enterRight);
        } else {
          ref2.current.classList.remove(styles.enterRight);
        }
        break;

      case 3:
        if (isVisible) {
          ref3.current.classList.add(styles.enterLeft);
        } else {
          ref3.current.classList.remove(styles.enterLeft);
        }
        break;

      default:
        break;
    }
  };
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  return (
    <div className="w-full p-10 flex flex-col items-start">
      <div className="relative">
        <h1 className="sm:text-6xl text-4xl sm:px-5 px-2 py-6 text-white tracking-tight bg-yellow-500 rounded-md shadow-lg ">
          They said about us.
        </h1>
        <img
          src="/assets/quote.svg"
          alt=""
          className={
            "sm:h-32 h-20 absolute sm:top-16 sm:-right-10 -right-3 top-10 " +
            styles.shake
          }
        />
      </div>
      {/* Testimonials */}
      <div className="w-full flex flex-col justify-center items-center my-6">
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => onChange(isVisible, 1)}
        >
          <div
            ref={ref1}
            className="sm:w-3/4 flex sm:flex-row flex-col justify-center items-center sm:px-10  pt-10"
          >
            <img
              src="/assets/testimonials/1.jpg"
              alt=""
              className="sm:w-1/5 w-1/2 rounded-full shadow-2xl"
            />
            <div className="p-10">
              <p className="text-blue-900">
                "Although the colon cancer treatment journey could be a little
                rough, having someone (a survivor) to talk to, will make it so
                much easier. That is why I will dedicate as much time as needed
                with @SAID NGO to anyone whose journey I can make easier"
              </p>
              <br />
              <i className="text-gray-900">Hala Habib</i>
              <p className="text-gray-900 text-sm">Role/Title</p>
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => onChange(isVisible, 2)}
        >
          <div
            ref={ref2}
            className="sm:w-3/4 flex sm:flex-row flex-col justify-center items-center sm:px-10  pt-10"
          >
            <img
              src="/assets/testimonials/2.jpg"
              alt=""
              className="sm:w-1/5 w-1/2 rounded-full shadow-2xl sm:order-2"
            />
            <div className="p-10 sm:order-1">
              <p className="text-blue-900">
                “I am blessed to be a part of the family of SAID NGO. I passed
                through cancer and I know the importance of support to cancer
                patients, which is one of the pillars of the mission of SAID
                NGO. Spreading awareness and offering support with them, gives
                me great satisfaction.”
              </p>
              <br />
              <i className="text-gray-900">Name of Person</i>
              <p className="text-gray-900 text-sm">Role/Title</p>
            </div>
          </div>
        </VisibilitySensor>{" "}
        <VisibilitySensor
          partialVisibility={true}
          onChange={(isVisible) => onChange(isVisible, 3)}
        >
          <div
            ref={ref3}
            className="sm:w-3/4 flex sm:flex-row flex-col justify-center items-center sm:px-10  pt-10"
          >
            <img
              src="/assets/testimonials/3.jpg"
              alt=""
              className="sm:w-1/5 w-1/2 rounded-full shadow-2xl"
            />
            <div className="p-10">
              <p className="text-blue-900">
                “Cancer may have started the fight but with the support of SAID
                NGO and the strength behind each smile we hold for others we
                will conquer it”
              </p>
              <br />
              <i className="text-gray-900">Name of Person</i>
              <p className="text-gray-900 text-sm">Role/Title</p>
            </div>
          </div>
        </VisibilitySensor>{" "}
      </div>
    </div>
  );
};
