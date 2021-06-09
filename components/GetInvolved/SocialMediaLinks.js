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

export const SocialMediaLinks = ({
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
  return (
    <div className="flex max-w-sm m-2 flex-row ">
      {facebook && (
        <a href={facebook} target="_blank">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size="2x"
            className="m-1.5 cursor-pointer hover:text-yellow-500 text-blue-900"
          />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="2x"
            className="m-1.5 cursor-pointer hover:text-yellow-500 text-blue-900"
          />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            size="2x"
            className="m-1.5 cursor-pointer hover:text-yellow-500 text-blue-900"
          />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            size="2x"
            className="m-1.5 cursor-pointer hover:text-yellow-500 text-blue-900"
          />
        </a>
      )}
    </div>
  );
};
