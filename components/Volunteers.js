import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../configVars";
import styles from "../styles/Founders.module.css";
import { VolunteerCard } from "./GetInvolved/VolunteerCard";

export const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get(api + "/volunteers").then((response) => {
      // console.log(response.data);
      setVolunteers(response.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      <div className="sm:text-6xl  text-3xl px-4 pt-10 text-blue-900">
        Meet Our Volunteers.
      </div>
      <div className="text-lg text-gray-800 my-2">
        Join this team of motivated volunteers and helps us create an impact.
      </div>
      <div
        className={
          "w-full p-10 flex sm:flex-row flex-col justify-center items-stretch flex-wrap " +
          styles.slideshow
        }
      >
        {volunteers.map((v, id) => (
          <VolunteerCard p={v} key={id} />
        ))}
      </div>
    </div>
  );
};
