import React, { useState } from "react";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { api } from "../configVars";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
library.add(faMapMarkerAlt, faPhoneAlt, faEnvelope);
export const Footer = () => {
  const [contact, setContact] = useState({
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setContact((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };
  const handleSend = () => {
    axios
      .post(api + "/contact-uses", contact)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  return (
    <div
      className={
        "w-full bg-blue-900 flex flex-col justify-center items-center pt-2 "
      }
    >
      <div className="w-full flex sm:flex-row flex-col justify-center items-center my-5">
        <div className="flex-grow flex flex-col justify-center p-5 pl-10">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="2x"
              className="text-white m-3"
            />
            <div className="text-white">Beirut - Lebanon</div>
          </div>
          <div className="flex flex-row items-center">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              size="2x"
              className="m-3  text-white"
            />
            <div className="text-white">+961 3 458 476</div>
          </div>
          <div className="flex flex-row items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="m-3  text-white"
            />
            <div className="text-white">hananimer@saidcrc.org</div>
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-start p-5">
          <div className="text-white text-4xl">Contact us</div>

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:border-white bg-gray-900 w-5/6 sm:w-2/3 mt-4 rounded-md h-10 p-2 text-white"
            onChange={(e) => handleChange(e)}
          />
          <textarea
            type="text"
            cols="40"
            rows="5"
            name="message"
            placeholder="Message"
            style={{ resize: "none" }}
            className="focus:border-white bg-gray-900 w-full sm:w-5/6 my-2 rounded-md p-2 text-white"
            onChange={(e) => handleChange(e)}
          />
          <button
            className={
              "shadow-xl lg:inline-flex lg:w-36 px-6 py-2 rounded font-bold items-center justify-center transition-all duration-500\
               border-2 border-solid border-yellow-500 hover:border-white hover:bg-blue-900 bg-yellow-500 hover:text-white text-gray-900 "
            }
            onClick={handleSend}
          >
            Send{" "}
          </button>
        </div>
      </div>
      <div className="text-white text-xl">
        {" "}
        Follow us on
        <span className="text-yellow-500"> Social Media.</span>
      </div>
      <SocialMedia />
      <div className="text-white text-sm py-2">
        {" "}
        SAID NGO - {new Date().getFullYear()}
      </div>
    </div>
  );
  // TODO: Add partners logos
};
