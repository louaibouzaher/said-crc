import styles from "../styles/Newsroom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoVideo,
  faNewspaper,
  faMicrophoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export const NewsroomHero = () => {
  const handleHover = (e) => {
    if (e.target.classList.contains("bubble")) {
      e.target.classList.add("bg-white");
      e.target.children[0].classList.add(styles.text);
      e.target.children[1].classList.add(styles.vector);
    }
  };
  return (
    <div className="sm:h-screen flex flex-col justify-center items-center bg-blue-900 overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-white sm:text-8xl text-4xl pt-32">Media</div>
        <div className="text-white sm:text-xl text-sm  text-center">
          You can find all our media presence in this section
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center p-10">
        <a
          href="#interviews"
          onMouseEnter={handleHover}
          className={
            "sm:my-0 my-4 bubble overflow-hidden cursor-pointer w-52 h-52 rounded-full shadow-2xl flex flex-col justify-center items-center transform sm:translate-x-3 sm:translate-y-32 hover:scale-105 transition-all "
          }
        >
          <div className="text-white text-3xl">Interviews</div>{" "}
          <FontAwesomeIcon
            icon={faPhotoVideo}
            className="transform translate-y-96 text-blue-900"
          />
        </a>
        <a
          href="#articles"
          onMouseEnter={handleHover}
          className="sm:my-0 my-4 bubble overflow-hidden cursor-pointer w-64 h-64 rounded-full shadow-2xl flex flex-col justify-center items-center transform hover:scale-105 transition-all"
        >
          <div className="text-white text-4xl">Articles</div>
          <FontAwesomeIcon
            icon={faNewspaper}
            size="1x"
            className="transform translate-y-96 text-blue-900"
          />
        </a>
        <a
          href="#testimonials"
          onMouseEnter={handleHover}
          className="sm:my-0 my-4 bubble overflow-hidden cursor-pointer w-44 h-44 rounded-full shadow-2xl flex flex-col justify-center items-center transform sm:-translate-x-3 sm:translate-y-36 hover:scale-105 transition-all"
        >
          <div href="#testimonials" className="text-white text-xl pt-4">
            Testimonials
          </div>
          <FontAwesomeIcon
            icon={faMicrophoneAlt}
            size="sm"
            className="transform translate-y-80 text-blue-900"
          />
        </a>
      </div>
    </div>
  );
};
