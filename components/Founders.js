import React from "react";
import { Card } from "./Founders/Card";
import styles from "../styles/Founders.module.css";

export const Founders = () => {
  const founders = [
    {
      name: "Hana Nimer",
      picture: "/assets/founders/hana-nimer.png",
      profession: "Founder, Managing Director, BA in Psychology",
      description:
        "My passion and motivation is to raise awareness about the importance of early screening in preventing colorectal cancer. A mission started by my husband Said especially after he was diagnosed with colorectal cancer. After graduating from LAU with a BA in Psychology, I set a goal to found an organization in the name of my husband SAID also an acronym for: Spreading Awareness Increasing Detection. Recently, I was accepted to the graduate program in the Department of Health Promotion and Community Health at the American University and supposed to start on the first week of September 2016. Meanwhile, I am in the process of contacting stakeholders in the fields related to our NGO and to its mission of raising awareness and of making the information accessible to everyone.",
    },
    {
      name: "Mahmoud M. Othman",
      picture: "/assets/founders/mahmoud-m.-othman.png",
      profession: "Vice President, MD Gastroenterology and Advanced endoscopy",
      description: `Being a Gastroenterologist who is involved in clinical research, I was exposed to many patients who were diagnosed with colon cancer and the numbers in Lebanon were shocking! Moreover the lack of awareness in our community was more worrisome than the cancer itself. This made me try to shift gears from only diagnosing and caring for cancer patients (which is the end result) toward targeting the real essence of the problem which is the lack of awareness about the importance of early screening.
        
        ​Volunteering to raise awareness in the community should be a part of the role of all physicians since this is what makes us true human beings. It has really helped me to regain the social and human aspect of medical work and I hope we will have other fellow physicians on board`,
    },
    {
      name: "Ale J. Hijase",
      picture: "/assets/founders/ale-j.-hejase.png",
      profession: "Founder",
      description: `Ale J. Hejase is with The Faculty of Economics and Business Administration at The Islamic University of Lebanon working in the Management Science area. He has worked at many universities, institutions, and industries both in the public and private sectors in Lebanon, Mexico and the USA. A. J. Hejase holds a B.E. in Industrial and Electronics Engineering from “Instituto Tecnológico de la Laguna” in Mexico, an M.E. in Control Systems from “Instituto Tecnológico y de Estudios Superiores de Monterrey” in Mexico, and a Ph.D. from Syracuse University in New York, USA. A. J. Hejase has written and published more than 30 papers, articles, CD-ROM titles, and books in: Education, Physics, Robotics, Entertainment, History, Information Systems, and Management Science. A. J. Hejase has been active in both public and private social sectors and contributed to various organizations in the areas of public services, governance and administration.`,
    },
    {
      name: "Mona Shorba",
      picture: "/assets/founders/mona-shorba.png",
      profession: "Nurse Manager",
      description:
        "I am an experienced Nurse Manager with 25 years of experience and currently work at the American University of Beirut Medical Center. I have obtained a Bachelor degree of Science in Nursing from the AUB School of Nursing and a Master degree in Nursing Science in the administration track also at AUB School of Nursing. My profession is to serve my community by providing and encouraging education to prevent disease and prompting awareness. Throughout my years of personal experience, I have always sought to further enhance my knowledge through obtaining Basic Life Support (BLS) certification from the American Heart Association, passing the Nursing Colloquium qualification exam, obtaining the Nursing License from the Ministry of Public Health in Lebanon. I also sought membership in a variety of professional organizations including the American Society for Pain Management Nursing (ASPMN), Lebanese Nurse’s Order, and Sigma Theta Tau International among others. As part of my profession, I also obtained the Service Excellence Award in 2001, and the Daisy Award in 2012. My vision is to share my knowledge and experience with others to the benefit of my society as a whole.",
    },
    {
      name: "Dr. Gladys Honein-AbouHaidar",
      picture: "/assets/founders/gladys-honein.png",
      profession: "RN, MPH, PhD",
      description:
        "Dr. Honein-AbouHaidar is an Assistant Professor at the Hariri School of Nursing, American University of Beirut (AUB). She completed her Bachelor of Science in Nursing in 1984 and her Master in Public Health in 1992 at the American University of Beirut. She obtained her PhD in Health Services Research in 2012 from the Institute of Health Policy, Management and Evaluation, University of Toronto, Canada. ",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      <div className="sm:text-6xl  text-3xl px-4 pt-10 text-blue-900">
        Meet The Founders.
      </div>
      <div
        className={
          "w-full p-10 flex sm:flex-row flex-col justify-center items-stretch flex-wrap " +
          styles.slideshow
        }
      >
        {founders.map((f,id) => (
          <Card p={f} key={id}/>
        ))}
      </div>
    </div>
  );
};
