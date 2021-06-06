import React from "react";
import { Card } from "./Research/Card";

export const ResearchPapers = () => {
  const papers = [
    {
      year: "2020",
      title:
        "Repeated Cross-Sectional Survey of Knowledge and Attitudes to Colorectal Cancer Screening in Lebanon",
      link: "https://www.scirp.org/pdf/jbm_2020122914141908.pdf",
      authors: "Hejase, A. , Hejase, H. , Nemer, H. , Hejase, C. and Trad, M. ",
      details:
        "Journal of Biosciences and Medicines, 8, 178-210. doi: 10.4236/jbm.2020.812017.",
    },
    {
      year: "2018",
      title:
        "Inflatable Colon: A Tool to Raise Awareness of the Importance Of colorectal Cancer Screening",
      link: "https://publons.com/publon/2792157/#review-2768327",
      authors: "Hejase, A. J., Nemer H. A., Hejase, H.J., Honein-Abouhaidar G.",
      details:
        "OSR Journal of Nursing and Health Science. Volume 7, Issue 4 Ver. VI (Jul.-Aug. 2018), PP 58-67 DOI:10.9790/1959-0704065867",
    },
    {
      year: "2016",
      title: "Colorectal Cancer: Exploring Awareness in Lebanon",
      link: "https://www.semanticscholar.org/paper/Colorectal-Cancer-%3A-Exploring-Awareness-in-Lebanon-Nemer-Hejase/01ca6b4313936e49c8ffee96fe51b271fe04e2d6",
      authors:
        "Nemer H.A., Hejase A.J., Hejase H.J., Trad M.A., Othman M., Chawraba M",
      details:
        "The Journal of Middle East and North Africa Sciences Vol 2(Issue 10):pp. 10-21. DOI: 10.12816/0032694",
    },
  ];
  return (
    <div>
      {papers.map((p) => (
        <Card content={p} />
      ))}
    </div>
  );
};
