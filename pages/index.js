import Head from "next/head";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { Who } from "../components/Who";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Said NGO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Who />
      <Testimonials />
      <Footer />
    </div>
  );
}
