export const Card = ({ content }) => {
  return (
    <a
      href={content.link}
      target="_blank"
      className="w-full sm:w-10/12 bg-white shadow-xl flex flex-col sm:p-10 p-6 sm:my-10 my-4 cursor-pointer transform hover:translate-x-4 transition-all duration-300"
    >
      <div className="text-xl text-gray-800 py-1"> {content.year}</div>
      <div className="sm:text-3xl text-xl text-blue-900 cursor-pointer py-2">
        {" "}
        {content.title}
      </div>
      <div className="text-lg"> {content.description}</div>
    </a>
  );
};
