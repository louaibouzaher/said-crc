import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { api } from "../../configVars";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";

const Article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(article);
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full py-32 sm:px-48 px-4 flex flex-col">
        <div className="sm:w-1/3 w-3/4  bg-gray-100 flex my-2 items-center p-3 rounded-lg shadow-md">
          <div
            src="/assets/awarness.jpg"
            className="w-20 h-20 mx-2 rounded-full"
            style={{
              backgroundImage: `url(${article.authorPicture.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(1)",
            }}
          ></div>

          <div className="text-gray-500 text-sm p-1">
            {new Date(article.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            <br />
            <span className="text-gray-800 text-lg">
              {" "}
              {article.authorName}{" "}
            </span>
            <br /> Title{" "}
          </div>
        </div>

        <div className="text-blue-900 sm:text-5xl text-3xl py-6 leading-tight">
          {article.title}
        </div>

        <div className="text-gray-800 sm:text-xl text-lg py-4">
          {article.shortDescription}
        </div>
        <div
          className="w-full rounded-lg"
          style={{
            backgroundImage: `url(${article.mainImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "40rem",
          }}
        ></div>
        <div className="my-10">{article.body}</div>
      </div>
    </>
  );
};

export default Article;
export async function getStaticProps({ params }) {
  const res = await fetch(api + `/articles/${params.id}`);
  const article = await res.json();
  console.log(article);
  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const res = await fetch(api + "/articles");
  const articles = await res.json();

  const paths = articles.map((a) => ({
    params: { id: a.id.toString() },
  }));

  return { paths, fallback: false };
}
