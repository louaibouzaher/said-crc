import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ArticleSection } from "../../components/Blog/ArticleSection";

const Article = () => {
  const [article, setArticle] = useState({});
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full py-32 sm:px-48 px-4 flex flex-col">
        <div className="sm:w-1/4 w-3/4  bg-gray-100 flex my-2 items-center p-3 rounded-lg shadow-md">
          <div
            src="/assets/awarness.jpg"
            className="w-20 h-20 mx-2 rounded-full"
            style={{
              backgroundImage:
                "url(" +
                `${require("../../public/assets/testimonial1.jpg")}` +
                ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(1)",
            }}
          ></div>

          <div className="text-gray-500 text-sm p-1">
            Sat June 5th, 2021 <br />
            <span className="text-gray-800 text-lg"> Name of Writer </span>
            <br /> Title{" "}
          </div>
        </div>

        <div className="text-blue-900 sm:text-5xl text-3xl py-6 leading-tight">
          {" "}
          Article Title Article Title Article Title Article Title Article Title
          Article Title {id}{" "}
        </div>

        <div className="text-gray-800 sm:text-xl text-lg py-4">
          {" "}
          Brief Introduction Brief Introduction Brief Introduction Brief
          Introduction Brief Introduction Brief Introduction{" "}
        </div>
        <div
          src="/assets/awarness.jpg"
          className="w-full rounded-lg"
          style={{
            backgroundImage:
              "url(" + `${require("../../public/assets/awarness.jpg")}` + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "40rem",
          }}
        ></div>
        {/* Article Sections */}
        <ArticleSection />
        <ArticleSection />
        <ArticleSection />
      </div>
    </>
  );
};

export default Article;
