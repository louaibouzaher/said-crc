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
          className={"sm:h-32 h-20 absolute sm:top-16 sm:-right-10 -right-3 top-10 " + styles.shake}
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
              src="/assets/testimonial1.jpg"
              alt=""
              className="sm:w-1/5 w-1/2 rounded-full shadow-2xl"
            />
            <div className="p-10">
              <p className="text-blue-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum recusandae necessitatibus voluptate, vero minima
                saepe sequi sint assumenda ipsum corporis eligendi mollitia
                dicta quidem dignissimos est error a. Possimus, beatae?
              </p>
              <br />
              <i className="text-gray-900">Name of Person</i>
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
              src="/assets/testimonial1.jpg"
              alt=""
              className="sm:w-1/5 w-1/2 rounded-full shadow-2xl sm:order-2"
            />
            <div className="p-10 sm:order-1">
              <p className="text-blue-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum recusandae necessitatibus voluptate, vero minima
                saepe sequi sint assumenda ipsum corporis eligendi mollitia
                dicta quidem dignissimos est error a. Possimus, beatae?
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
              src="/assets/testimonial1.jpg"
              alt=""
              className="sm:w-1/5 w-1/2 rounded-full shadow-2xl"
            />
            <div className="p-10">
              <p className="text-blue-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum recusandae necessitatibus voluptate, vero minima
                saepe sequi sint assumenda ipsum corporis eligendi mollitia
                dicta quidem dignissimos est error a. Possimus, beatae?
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
