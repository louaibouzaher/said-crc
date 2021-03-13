import Head from "next/head";
import React from "react";
import { NewsroomHero } from "../components/Newsroom";
import { Interviews } from "../components/Newsroom/Interviews";
export default function Newsroom() {
  return (
    <>
      <Head>
        <title>Newsroom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NewsroomHero />
        <Interviews />
      </div>
    </>
  );
}
