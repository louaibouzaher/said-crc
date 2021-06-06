import React from "react";
import Head from "next/head";
import { ResearchPapers } from "../components/Research";
export default function Research() {
  return (
    <>
      <Head>
        <title>Research | SAID NGO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:min-h-screen flex flex-col justify-center items-start sm:p-20 p-6">
        <div className="sm:text-6xl text-4xl text-blue-900 mt-20 ">Research</div>
        <ResearchPapers />
      </div>
    </>
  );
}
