import React from "react";
import { FeaturedArticle } from "../components/Blog/FeaturedArticle";
import { AllArticles } from "../components/Blog/AllArticles";

export default function Blog() {
  return (
    <>
      <div className="sm:h-screen flex flex-col justify-center items-start py-10 ">
        <div className="flex flex-row w-full">
          <div className="flex flex-col sm:m-2 p-3 sm:p-0">
            <div className="sm:text-8xl text-6xl font-bold text-blue-900 sm:pt-36 pt-16">
              The Blog
            </div>
            <p className="text-sm py-2 text-gray-600">
              You can find all about cancer, health and volunteering related
              articles.
            </p>
          </div>
          <div className=" bg-blue-900 flex-grow hidden sm:block"></div>
        </div>
        <FeaturedArticle />
      </div>
      <div className="w-full text-center sm:text-6xl text-4xl font-bold bg-blue-900 sm:pt-10 text-white sm:p-10 z-10 sm:-mt-6 -mt-10 p-4">
        Read More.
      </div>
      <AllArticles />
    </>
  );
}
