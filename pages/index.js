import Head from "next/head";
import { Hero } from "../components/Hero";
import { JoinUs } from "../components/JoinUs";
import { Testimonials } from "../components/Testimonials";
import { Who } from "../components/Who";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SAID NGO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Who />
      <Testimonials />
      <JoinUs />
    </div>
  );
}
