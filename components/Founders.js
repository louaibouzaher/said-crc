import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../configVars";
import { Card } from "./Founders/Card";
import styles from "../styles/Founders.module.css";

export const Founders = () => {

  const [founders, setFounders] = useState([]);
  useEffect(() => {
    axios.get(api + "/founders").then((response) => {
      // console.log(response.data);
      setFounders(response.data);
    });
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      <div className="sm:text-6xl  text-3xl px-4 pt-10 text-blue-900">
        Board & Members
      </div>
      <div
        className={
          "w-full p-10 flex sm:flex-row flex-col justify-center items-stretch flex-wrap " +
          styles.slideshow
        }
      >
        {founders.map((f,id) => (
          <Card p={f} key={id}/>
        ))}
      </div>
    </div>
  );
};
