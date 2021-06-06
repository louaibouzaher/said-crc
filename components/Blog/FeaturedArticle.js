import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faAngleDoubleRight);
export const FeaturedArticle = () => {
  return (
    <div className="w-full sm:p-20 p-6 bg-blue-900">
      <div className="p-2 text-white ">Our Latest Article</div>
      <div className="flex sm:flex-row flex-col">
        <img
          src="/assets/bgHero.jpg"
          alt=""
          className="sm:w-1/3 sm:h-1/3 w-5/6 rounded-xl "
        />
        <div className="flex flex-col p-4">
          <div className="py-1 text-xs text-gray-200">Fri Mar 12 2021</div>
          <h1 className="text-4xl text-white">Title of the article</h1>
          <p className="text-white py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            aut aliquid ex vero saepe itaque alias, molestias cum culpa odio
            provident hic voluptatem numquam. Eaque nisi blanditiis culpa vitae
            debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus aut aliquid ex vero saepe itaque alias, molestias cum
            culpa odio provident hic voluptatem numquam. Eaque nisi blanditiis
            culpa vitae debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus aut aliquid ex vero saepe itaque alias,
            molestias cum culpa odio provident hic voluptatem numquam. Eaque
            nisi blanditiis culpa vitae debitis.
          </p>
          <Link href="/" className="self-end">
            <div
              className={
                "cursor-pointer sm:mr-auto sm:ml-0 mx-5 px-6 py-1 my-10 rounded font-bold flex items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 border-solid border-white border-2 "
              }
            >
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="text-white "
                size="2x"
              />
              <div className="text-white text-2xl p-1 "> Learn More </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
