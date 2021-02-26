import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faFacebook, faTwitter, faInstagram, faLinkedin);

const SocialMedia = () => {
  const fb = "https://www.facebook.com/saidcrc.org/";
  const insta = "https://www.instagram.com/saidngo/";
  const linkedin = "https://www.linkedin.com/in/said-ngo-358780120";
  const twitter = "https://twitter.com/SAIDNG0";
  return (
    <div className="flex max-w-sm m-5 mt-7 flex-row ">
      <a href={fb} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          size="2x"
          className="m-1.5 cursor-pointer hover:text-yellow-500 text-white"
        />
      </a>
      <a href={insta} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          size="2x"
          className="m-1.5 cursor-pointer hover:text-yellow-500 text-white"
        />
      </a>
      <a href={twitter} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          size="2x"
          className="m-1.5 cursor-pointer hover:text-yellow-500 text-white"
        />
      </a>

      <a href={linkedin} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="2x"
          className="m-1.5 cursor-pointer hover:text-yellow-500 text-white"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
