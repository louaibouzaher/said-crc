import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../configVars";
import Link from "next/link";
import styles from "../styles/Hero.module.css";
import styles1 from "../styles/Testimonials.module.css";
export const Hero = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios.get(api + "/main-page-cover").then((response) => {
      // console.log(response.data);
      setContent(response.data);
    });
  }, []);

  return (
    <>
      <div
        className={"w-full p-0 h-screen " + `${styles.backgroundImage}`}
        style={{
          backgroundImage: content.image
            ? "url(" + content.image[0].url + ")"
            : "linear-gradient(90deg,#1E3A8A,#1E3A8A)",
        }}
      >
        {" "}
      </div>
      <div
        className={
          "absolute w-full top-1/3 flex flex-col items-start sm:pl-28 sm:pt-10 px-4 " +
          styles1.enterLeft
        }
      >
        <h1
          className={
            "text-4xl sm:text-6xl py-4 text-white " + `${styles.textShadow}`
          }
        >
          {content.Title}
        </h1>
        <p className={"py-4 text-white sm:w-1/2  " + `${styles.textShadow}`}>
          {content.Description}
        </p>
        <Link href={content.Link ? content.Link : ""}>
          <a
            className={
              "lg:inline-flex lg:w-auto px-6 py-2 sm:my-6 rounded font-bold items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 "
            }
          >
            {content.Button}
          </a>
        </Link>
      </div>
    </>
  );
};
