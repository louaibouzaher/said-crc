import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Testimonials.module.css";
import { Testimonial } from "./Testimonials/Testimonial";
import axios from "axios";
import { api } from "../configVars";
export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get(api + "/testimonials").then((response) => {
      // console.log(response.data);
      setTestimonials(response.data);
    });
  }, []);
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
        {testimonials.map((t) => (
          <Testimonial t={t} key={t.id} />
        ))}
      </div>
    </div>
  );
};
