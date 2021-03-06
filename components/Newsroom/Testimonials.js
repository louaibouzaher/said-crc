import React, { useEffect, useState } from "react";
import { TestimonialsCard } from "./TestimonialsCard";
import axios from "axios";
import { api } from "../../configVars";
export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get(api + "/newsroom-stories").then((response) => {
      // console.log(response.data);
      setTestimonials(response.data);
    });
  }, []);

  return (
    <div
      className="w-full sm:h-screen py-20 flex sm:flex-row flex-col items-center justify-center bg-blue-900 overflow-hidden"
      id="testimonials"
    >
      <div className="sm:w-1/3 w-full p-10 sm:text-8xl text-6xl text-white">
        Hear <br /> Their <br /> Stories.
        <div className="bg-yellow-500 h-10 -mt-6"></div>
      </div>
      <div className="w-full sm:grid sm:grid-cols-2 sm:grid-rows-2">
        {testimonials.map((t, id) => (
          <TestimonialsCard person={t} key={id} />
        ))}
      </div>
    </div>
  );
};
