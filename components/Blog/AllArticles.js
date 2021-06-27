import React, { useEffect, useState } from "react";
import { ArticlePreview } from "./ArticlePreview";
import axios from "axios";
import { api } from "../../configVars";
export const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(api + "/articles").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  }, []);
 
  return (
    <div className="w-full p-10 flex sm:flex-row flex-col justify-center items-stretch flex-wrap  ">
      {articles.map((a) => (
        <ArticlePreview a={a} key={a.id} />
      ))}
    </div>
  );
};
