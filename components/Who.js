import Image from "next/image";
import { Card } from "./Who/Card";
import styles from "../styles/Who.module.css";

export const Who = () => {
  const mission = [
    {
      title: "Awarness",
      text:
        "Increase awareness about CRC and CRC screening. Improve detection through decreasing barriers to participation in CRC screening.",
      src: "/assets/awarness.jpg",
    },
    {
      title: "Advocacy",
      text:
        "Involve doctors and general practitioners in advising patients about the necessity of early screening starting at the age of 45. Advocate with stakeholders to establish an organized CRC screening program in Lebanon while assuring access to high quality screening.",
      src: "/assets/advocacy.jpg",
    },
    {
      title: "Support",
      text:
        "SAID NGO team members help in directing people to reliable laboratories for FIT and taking appointments to those who ask for help in that matter. SAID NGO survivors share their experience with compassion, knowledge and understanding via support groups to colorectal patients, and caregivers.",
      src: "/assets/support.jpg",
    },
  ];
  return (
    <div className="w-full bg-blue-900 px-32 py-20 flex flex-col items-center">
      <img src="/assets/white.svg" alt="" className="h-36" />
      <p className="w-1/2 text-white py-4 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        blanditiis alias repellendus veniam nihil quo minus fuga nostrum quaerat
        impedit, tempora voluptas ut possimus dolorum expedita distinctio iure
        esse? Odit.
      </p>
      <div className="description flex flex-row justify-center items-stretch ">
        {mission.map((m, x) => (
          <Card mission={m} key={x} />
        ))}
      </div>
      <div className="flex flex-row pt-20 justify-center items-center">
        <div className={"rounded-full " + styles.visionBg}></div>

        <div className="flex flex-col p-10">
          <h1 className="text-6xl py-4 text-yellow-500">Vision</h1>
          <p className="text-white">
            All eligible Lebanese males and females to be up-to-date with CRC
            screening.
          </p>
        </div>
      </div>
    </div>
  );
};
