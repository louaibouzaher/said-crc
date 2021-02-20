import React from "react";

export const Card = ({ mission }) => {
  return (
    <div className="bg-white flex flex-1 flex-grow flex-col justify-start items-center p-4 py-6 m-2 shadow-xl rounded-md">
      <div className="h-20 my-3">
        <img src={mission.src} alt="" className="h-full"/>
      </div>
      <h1 className="text-2xl text-blue-900 my-3">{mission.title}</h1>
      <p className="text-sm text-blue-900">{mission.text}</p>
    </div>
  );
};
