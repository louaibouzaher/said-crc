import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faAngleDoubleRight);

export const ArticlePreview = ({ a }) => {
  return (
    <div
      className="cursor-pointer sm:w-1/4 w-full bg-white flex flex-col justify-between items-start
    sm:m-3 my-3 sm:my-3 shadow-xl rounded-2xl transform hover:scale-105 hover:-translate-y-3 transition-all p-2"
    >
      <div>
        <img
          src={a.mainImage.url}
          alt=""
          className="w-full h-48 object-cover"
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <div className="px-3 py-1 text-xs text-gray-700">
          {a.date.substring(0, 16)}
        </div>
        <div className="p-2 text-xl text-blue-900">{a.title}</div>
        <div className="w-3/4  bg-gray-100 flex my-2 items-center p-2 rounded-lg shadow-md">
          <div
            className="w-14 h-14 mx-1 rounded-full"
            style={{
              backgroundImage: `url( ${a.authorPicture.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(1)",
            }}
          ></div>

          <div className="text-gray-500 text-sm p-1">
            <span className="text-gray-800"> {a.authorName} </span>
            <br /> {a.AuthorRole}{" "}
          </div>
        </div>
        <div className="p-3 text-sm text-gray-700">
          {a.body.substring(0, 100)}
        </div>
      </div>
      <Link href={`/article/${a.id}`}>
        <div className="m-2 px-2 flex flex-row justify-center items-center bg-blue-900 shadow-2xl rounded-lg transform hover:translate-x-4 transition-all duration-300">
          <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white" />
          <div className="text-white py-1 px-4 "> Learn More </div>
        </div>
      </Link>
    </div>
  );
};
