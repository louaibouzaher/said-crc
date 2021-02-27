import Head from "next/head";
import { Founders } from "../components/Founders";
import { AboutSection } from "../components/About";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutSection />
      <Founders />
    </>
  );
}
