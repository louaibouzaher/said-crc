export const Card = ({ content }) => {
  return (
    <div className="w-full sm:w-10/12 bg-white shadow-xl flex flex-col sm:p-10 p-6 sm:my-10 my-4">
      <div className="text-xl text-gray-800 py-1"> {content.year}</div>
      <a
        className="sm:text-3xl text-xl text-blue-900 cursor-pointer py-2"
        href={content.link}
        target="_blank"
      >
        {" "}
        {content.title}
      </a>
      <div className="text-lg"> {content.description}</div>
    </div>
  );
};
