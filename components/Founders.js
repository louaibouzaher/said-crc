import React from "react";
import { Card } from "./Founders/Card";
import styles from "../styles/Founders.module.css";

export const Founders = () => {
  const founders = [
    {
      name: "Full Name1",
      picture: "/assets/testimonial1.jpg",
      profession: "Work/Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam maxime ut sit tenetur veniam facilis beatae pariatur temporibus quos a vero fuga odit delectus, accusamus fugit soluta eveniet voluptates!",
    },
    {
      name: "Full Name2",
      picture: "/assets/testimonial1.jpg",
      profession: "Work/Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam maxime ut sit tenetur veniam facilis beatae pariatur temporibus quos a vero fuga odit delectus, accusamus fugit soluta eveniet voluptates!",
    },
    {
      name: "Full Name3",
      picture: "/assets/testimonial1.jpg",
      profession: "Work/Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam maxime ut sit tenetur veniam facilis beatae pariatur temporibus quos a vero fuga odit delectus, accusamus fugit soluta eveniet voluptates!",
    },
    {
      name: "Full Name4",
      picture: "/assets/testimonial1.jpg",
      profession: "Work/Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam maxime ut sit tenetur veniam facilis beatae pariatur temporibus quos a vero fuga odit delectus, accusamus fugit soluta eveniet voluptates!",
    },
    {
      name: "Full Name5",
      picture: "/assets/testimonial1.jpg",
      profession: "Work/Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam maxime ut sit tenetur veniam facilis beatae pariatur temporibus quos a vero fuga odit delectus, accusamus fugit soluta eveniet voluptates!",
    },
    {
      name: "Full Name6",
      picture: "/assets/testimonial1.jpg",
      profession: "Work/Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam maxime ut sit tenetur veniam facilis beatae pariatur temporibus quos a vero fuga odit delectus, accusamus fugit soluta eveniet voluptates!",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-4xl p-5 text-blue-900">Meet The Founders.</div>
      <div
        className={
          "w-full p-10 flex flex-row justify-center items-stretch flex-wrap  " +
          styles.slideshow
        }
      >
        {founders.map((f) => (
          <Card p={f} />
        ))}
      </div>
    </div>
  );
};
