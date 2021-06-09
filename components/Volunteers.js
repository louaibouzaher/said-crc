import React from "react";
import styles from "../styles/Founders.module.css";
import { VolunteerCard } from "./GetInvolved/VolunteerCard";

export const Volunteers = () => {
  const volunteers = [
    {
      name: "Louai Bouzaher",
      twitter: "https://twitter.com/louaibouzaher",
      linkedin: "https://www.linkedin.com/in/mohamed-louai-bouzaher-bb86201b0/",
      picture: "/assets/founders/louaibouzaher.png",
      profession: "Computer Science Student at AUB",
      quote: "Working with SAID NGO was a great chance to learn!",
    },
    {
      name: "Louai Bouzaher",
      facebook: "https://www.facebook.com/bouzahermohamedlouai/",
      twitter: "https://twitter.com/louaibouzaher",
      linkedin: "https://www.linkedin.com/in/mohamed-louai-bouzaher-bb86201b0/",
      instagram: "https://www.instagram.com/louaibouzaher/",
      picture: "/assets/founders/louaibouzaher.png",
      profession: "Computer Science Student at AUB",
      quote: "Working with SAID NGO was a great chance to learn!",
    },
    {
      name: "Louai Bouzaher",
      facebook: "https://www.facebook.com/bouzahermohamedlouai/",
      twitter: "https://twitter.com/louaibouzaher",
      linkedin: "https://www.linkedin.com/in/mohamed-louai-bouzaher-bb86201b0/",
      instagram: "https://www.instagram.com/louaibouzaher/",
      picture: "/assets/founders/louaibouzaher.png",
      profession: "Computer Science Student at AUB",
      quote: "Working with SAID NGO was a great chance to learn!",
    },
    {
      name: "Louai Bouzaher",
      facebook: "https://www.facebook.com/bouzahermohamedlouai/",
      twitter: "https://twitter.com/louaibouzaher",
      linkedin: "https://www.linkedin.com/in/mohamed-louai-bouzaher-bb86201b0/",
      instagram: "https://www.instagram.com/louaibouzaher/",
      picture: "/assets/founders/louaibouzaher.png",
      profession: "Computer Science Student at AUB",
      quote: "Working with SAID NGO was a great chance to learn!",
    },
    {
      name: "Louai Bouzaher",
      facebook: "https://www.facebook.com/bouzahermohamedlouai/",
      twitter: "https://twitter.com/louaibouzaher",
      linkedin: "https://www.linkedin.com/in/mohamed-louai-bouzaher-bb86201b0/",
      instagram: "https://www.instagram.com/louaibouzaher/",
      picture: "/assets/founders/louaibouzaher.png",
      profession: "Computer Science Student at AUB",
      quote: "Working with SAID NGO was a great chance to learn!",
    },
  ];
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
