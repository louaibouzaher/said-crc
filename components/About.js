import styles from "../styles/About.module.css";
export const AboutSection = () => {
  return (
    <div className="w-full sm:h-screen sm:p-12 p-5 pb-20 pt-20 flex sm:flex-row flex-col sm:justify-center sm:items-center bg-blue-900 overflow-x-hidden">
      <div className="sm:w-1/2 flex flex-col justify-center items-start p-4">
        <div className="text-6xl py-3  text-yellow-500">About</div>
        <div className="text-white">
          The SAID NGO carries out diverse educational events throughout the
          year to increase the awareness about colorectal cancer in Lebanon and
          to inform the public about the importance of early screening. The
          ultimate goal is to augment the total number of men and women being
          screened in the absence of any symptom starting at the age of 50.
          <br /> 
          <br />
          We take part in health forums and conferences, distribute educational
          flyers, give informative lectures, and participate in talk shows on
          the local television and radio stations. Securing funds and sponsors
          to help those who cannot afford to go for early screening.
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
