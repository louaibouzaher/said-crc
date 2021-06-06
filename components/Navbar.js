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
          {active && (
            <svg
              className="m-1 w-5 h-5 text-white"
              fill="white"
              height="365.696pt"
              viewBox="0 0 365.696 365.696"
              width="365.696pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
            </svg>
          )}
          {!active && (
            <svg
              className="w-6 h-7"
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
          )}
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
                }  font-interBold lg:inline-flex lg:w-auto sm:w-full mx-5 px-6 py-2 sm:my-0 my-2 rounded items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={() => setselected("about")}
                className={`${
                  selected == "about" ? "text-gray-800" : "text-blue-900"
                }  lg:inline-flex lg:w-auto sm:w-full mx-5 px-6 py-2 sm:my-0 my-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Who We Are
              </a>
            </Link>
            <Link href="/newsroom">
              <a
                onClick={() => setselected("newsroom")}
                className={`${
                  selected == "newsroom" ? "text-gray-800" : "text-blue-900"
                }  lg:inline-flex lg:w-auto sm:w-full mx-5 px-6 py-2 sm:my-0 my-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Newsroom
              </a>
            </Link>
            <Link href="/research">
              <a
                onClick={() => setselected("research")}
                className={`${
                  selected == "research" ? "text-gray-800" : "text-blue-900"
                } lg:inline-flex lg:w-auto sm:w-full mx-5 px-6 py-2 sm:my-0 my-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white `}
              >
                Research
              </a>
            </Link>
            <Link href="/blog">
              <a
                onClick={() => setselected("blog")}
                className={`${
                  selected == "blog" ? "text-gray-800" : "text-blue-900"
                }  lg:inline-flex lg:w-auto sm:w-full mx-5 px-6 py-2 sm:my-0 my-2 rounded font-bold items-center justify-center hover:bg-blue-900 hover:text-white`}
              >
                Blog
              </a>
            </Link>
            <Link href="/getinvolved">
              <a
                onClick={() => setselected(null)}
                className={
                  "lg:inline-flex lg:w-auto sm:mx-2 mx-5 sm:my-0 my-2 px-6 py-2 rounded font-bold items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 "
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
