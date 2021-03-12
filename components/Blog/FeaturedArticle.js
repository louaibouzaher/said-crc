import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faAngleDoubleRight);
export const FeaturedArticle = () => {
  return (
    <div className="w-full sm:p-10 p-6 bg-yellow-500">
      <div className="p-2">Our Latest Article</div>
      <div className="flex sm:flex-row flex-col">
        <img
          src="/assets/bgHero.jpg"
          alt=""
          className="sm:w-1/3 sm:h-1/3 w-5/6 rounded-xl "
        />
        <div className="flex flex-col p-4">
          <div className="px-2 py-1 text-xs text-gray-700">Fri Mar 12 2021</div>
          <h1 className="text-4xl text-white">Title of the article</h1>
          <p>
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
          <Link href="/">
            <div className="py-8 flex flex-row justify-end items-center">
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
