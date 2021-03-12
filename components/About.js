import { Card } from "./About/Card";
import styles from "../styles/About.module.css";
export const AboutSection = () => {
  return (
    <div className="w-full sm:h-screen sm:p-12 p-5 pb-20 pt-20 flex sm:flex-row flex-col sm:justify-center sm:items-center bg-blue-900 ">
      <div className="sm:w-1/2 flex flex-col justify-center items-start p-4">
        <div className="text-6xl py-1 text-yellow-500">About</div>
        <div className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          pariatur, laudantium iusto voluptatibus minus laboriosam libero,
          blanditiis at quod tempora, sunt sapiente? Distinctio nobis temporibus
          optio culpa dolorem delectus ab! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Molestiae, maiores? Ab quos a voluptas
          dignissimos maiores aspernatur ut aliquam in, obcaecati praesentium
          fuga placeat facilis optio iure error, nihil ad.
        </div>
      </div>
      <div className="flex flex-row sm:w-3/5 w-full mt-10">
        <div
          className={
            "w-1/3 bg-white rounded-md sm:p-4 p-2 sm:pb-14 pb-5 shadow-2xl " +
            styles.fallenImage1
          }
          style={{
            transform: "rotate(-8deg) translateX(10px)",
          }}
          delay={1}
        >
          <img src="/assets/bgHero.jpg" alt="" />
        </div>
        <div
          className={
            "w-1/3 bg-white rounded-md sm:p-4 p-2 sm:pb-14 pb-5 shadow-2xl " +
            styles.fallenImage3
          }
          style={{
            transform: "translateY(-20px) scale(1.3)",
            zIndex: 10,
          }}
          delay={5}
        >
          <img src="/assets/bgHero.jpg" alt="" />
        </div>
        <div
          className={
            "w-1/3 bg-white rounded-md sm:p-4 p-2 sm:pb-14 pb-5 shadow-2xl " +
            styles.fallenImage2
          }
          style={{
            transform: "translate(-30px,30px) scale(1.1) rotate(15deg)",
          }}
          delay={3}
        >
          <img src="/assets/bgHero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
