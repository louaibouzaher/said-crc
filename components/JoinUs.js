import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <div className="h-screen w-full bg-blue-900  overflow-hidden">
      <ParallaxProvider>
        <Parallax
          className="h-screen w-full flex justify-center items-center "
          x={[-30, 30]}
          tagOuter="figure"
        >
          <div className="sm:text-6xl text-3xl px-2 my-4 pt-10 text-white text-center">
            Join our initiative.
          </div>
          <p className="text-gray-200  text-center"> If you would like to contribute our mission, please follow the link below.</p>
          <Link href="/getinvolved" className="">
            <div
              className={
                "cursor-pointer m-5 px-6 py-1 rounded font-bold flex items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 border-solid border-white border-2  transition-all duration-300"
              }
            >
              <div className="text-white text-2xl py-1 px-4"> Get Involved </div>
            </div>
          </Link>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};
