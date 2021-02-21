import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [selected, setselected] = useState("home");

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav
        className={
          "flex items-center flex-wrap bg-white p-3 fixed w-full shadow-md " +
          `${styles.top}`
        }
      >
        <Link href="/">
          <a
            className="inline-flex items-center mr-4 "
            onClick={() => setselected("home")}
          >
            <img src="/assets/logo.svg" alt="" className="h-16" />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 bg-blue-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a
                onClick={() => setselected("home")}
                className={`${
                  selected == "home" ? "text-gray-800" : "text-blue-900"
                }  font-interBold lg:inline-flex lg:w-auto w-full px-6 py-2 rounded items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={() => setselected("about")}
                className={`${
                  selected == "about" ? "text-gray-800" : "text-blue-900"
                }  lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Who We Are
              </a>
            </Link>
            <Link href="/newsroom">
              <a
                onClick={() => setselected("newsroom")}
                className={`${
                  selected == "newsroom" ? "text-gray-800" : "text-blue-900"
                }  lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Newsroom
              </a>
            </Link>
            <Link href="/research">
              <a
                onClick={() => setselected("research")}
                className={`${
                  selected == "research" ? "text-gray-800" : "text-blue-900"
                } lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white `}
              >
                Research
              </a>
            </Link>
            <Link href="/blog">
              <a
                onClick={() => setselected("blog")}
                className={`${
                  selected == "blog" ? "text-gray-800" : "text-blue-900"
                }  lg:inline-flex lg:w-auto w-full px-6 py-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Blog
              </a>
            </Link>
            <Link href="/getinvolved">
              <a
                onClick={() => setselected(null)}
                className={
                  "lg:inline-flex lg:w-auto sm:mx-2 mx-5 px-6 py-2 rounded font-bold items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 "
                }
              >
                Get Involved
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
