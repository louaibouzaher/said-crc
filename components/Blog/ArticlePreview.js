import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faAngleDoubleRight);

export const ArticlePreview = ({ a }) => {
  return (
    <div
      className="cursor-pointer sm:w-1/4 w-full bg-white flex flex-col justify-start items-start
    sm:m-3 my-3 sm:my-3 shadow-xl rounded-2xl transform hover:scale-105 hover:-translate-y-3 transition-all p-2"
    >
      <img
        src={a.picture}
        alt=""
        className="w-full h-1/2 object-cover"
        style={{
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <div className="px-3 py-1 text-xs text-gray-700">
        {a.date.substring(0, 16)}
      </div>
      <div className="p-2 text-xl text-blue-900">{a.title}</div>
      <div className="p-3 text-sm text-gray-700">
        {a.content.substring(0, 100)}
      </div>
      <div className="mx-2 px-2 flex flex-row justify-center items-center bg-blue-900 shadow-2xl rounded-lg">
        <FontAwesomeIcon icon={faAngleDoubleRight} className="text-white" />
        <div className="text-white p-1 "> Learn More </div>
      </div>
    </div>
  );
};
