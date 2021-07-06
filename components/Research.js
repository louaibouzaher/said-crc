import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../configVars";
import { Card } from "./Research/Card";

export const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    axios.get(api + "/research-pages").then((response) => {
      // console.log(response.data);
      setPapers(response.data);
    });
  }, []);

  
  return (
    <div>
      {papers.map((p) => (
        <Card content={p} key={p.id} />
      ))}
    </div>
  );
};
