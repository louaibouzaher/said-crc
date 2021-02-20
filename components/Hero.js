import Link from "next/link";
import Background from "../public/assets/bgHero.jpg";
import styles from "../styles/Hero.module.css";
export const Hero = () => {
  return (
    <>
      <div className={"w-full p-0 h-screen " + `${styles.backgroundImage}`}>
        {" "}
      </div>
      <div className="absolute w-full top-1/3 flex flex-col items-start pl-10 ">
        <h1 className={"text-4xl py-4 text-white " + `${styles.textShadow}`}>
          Screening can save a life.
        </h1>
        <p className={"py-4 text-white " + `${styles.textShadow}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur{" "}
          <br />
          omnis debitis molestias soluta officia ratione possimus, similique
          fuga <br />
          reprehenderit consequuntur saepe. Eligendi nihil necessitatibus
          numquam <br />
          nulla doloremque hic iusto iure! <br />
        </p>
        <Link href="/about">
          <a
            className={
              "lg:inline-flex lg:w-auto px-6 py-2 rounded font-bold items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 "
            }
          >
            Learn More{" "}
          </a>
        </Link>
      </div>
    </>
  );
};
