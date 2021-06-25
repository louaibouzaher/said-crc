import { React, useEffect, useRef, useState } from "react";
import { Card } from "./Who/Card";
import styles from "../styles/Who.module.css";
import styles1 from "../styles/Testimonials.module.css";
import VisibilitySensor from "react-visibility-sensor";
import { Statistics } from "./Who/Statistics";
import axios from "axios";
import { api } from "../configVars";
export const Who = () => {
  const [sections, setSections] = useState([]);
  const mission = [
    {
      id: 0,
      title: "Awarness",
      text: "Increase awareness about CRC and CRC screening. Improve detection through decreasing barriers to participation in CRC screening.",
      src: "/assets/awarness.jpg",
    },
    {
      id: 1,
      title: "Advocacy",
      text: "Involve doctors and general practitioners in advising patients about the necessity of early screening starting at the age of 45. Advocate with stakeholders to establish an organized CRC screening program in Lebanon while assuring access to high quality screening.",
      src: "/assets/advocacy.jpg",
    },
    {
      id: 2,
      title: "Support",
      text: "SAID NGO team members help in directing people to reliable laboratories for FIT and taking appointments to those who ask for help in that matter. SAID NGO survivors share their experience with compassion, knowledge and understanding via support groups to colorectal patients, and caregivers.",
      src: "/assets/support.jpg",
    },
  ];
  const onChange = (isVisible) => {
    if (isVisible) {
      ref.current.classList.add(styles.enterRight);
    } else {
      ref.current.classList.remove(styles.enterRight);
    }
  };
  const onChangeRef1 = (isVisible) => {
    if (isVisible) {
      ref1.current.classList.add(styles.enterRight);
      ref2.current.classList.add(styles1.enterLeft);
    }
  };
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  useEffect(() => {
    axios.get(api + "/statistics").then((response) => {
      // console.log(response.data);
      setSections([
        {
          name: "Events",
          number: response.data.events,
          id: 1,
        },
        {
          name: "Participants",
          number: response.data.participants,
          id: 2,
        },
        {
          name: "Volunteers",
          number: response.data.volunteers,
          id: 3,
        },
      ]);
    });
  }, []);
  return (
    <div className="w-full bg-blue-900 sm:px-32 px-4 py-20 flex flex-col items-center overflow-hidden">
      <VisibilitySensor partialVisibility={true} onChange={onChange}>
        <img ref={ref} src="/assets/white.svg" alt="" className="h-36" />
      </VisibilitySensor>
      <p className="sm:w-1/2 text-white py-4 px-2 text-center">
        The mission of SAID NGO is threefold: awareness, advocacy and support.
      </p>
      <div
        className={
          "description flex sm:flex-row flex-col justify-center items-stretch"
        }
      >
        {mission.map((m) => (
          <Card mission={m} key={m.id} d={m.id} />
        ))}
      </div>
      <div className="flex sm:flex-row flex-col pt-20 justify-center items-center">
        <div
          ref={ref2}
          className={styles.visionBg + " shadow-2xl rounded-full "}
        ></div>

        <div className="flex flex-col sm:p-10 p-2">
          <h1 className="text-6xl pt-4 text-white z-20">Vision.</h1>
          <VisibilitySensor partialVisibility={true} onChange={onChangeRef1}>
            <div
              ref={ref1}
              className="bg-yellow-500 h-6 w-52 shadow-md z-10"
              style={{ marginTop: -20 }}
            ></div>
          </VisibilitySensor>
          <p className="text-white py-3">
            All eligible Lebanese males and females to be up-to-date with CRC
            screening.
          </p>
        </div>
      </div>
      <div
        className={
          "w-full flex sm:flex-row flex-col justify-center items-stretch py-10"
        }
      >
        {sections.map((s) => (
          <Statistics name={s.name} number={s.number} key={s.id} />
        ))}
      </div>
    </div>
  );
};
