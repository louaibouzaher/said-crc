import React, { useState } from "react";
import Head from "next/head";
import { VolunteeringForm } from "../components/GetInvolved/VolunteeringForm";
import { DonationForm } from "../components/GetInvolved/DonationForm";
import { TestimonialForm } from "../components/GetInvolved/TestimonialForm";
import { Volunteers } from "../components/Volunteers";
export default function Getinvolved() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <Head>
        <title>Get Involved | SAID NGO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full flex flex-col justify-start items-start sm:p-20 p-10">
        <div className="text-6xl text-blue-900 mt-20">Get Involved</div>
        <div className="text-lg text-gray-800 my-2">
          If you would like to contribute to our mission, you can reach out
          through this form.
        </div>
        <div className="flex flex-wrap justify-center my-4">
          <a
            onClick={() => setSelected(1)}
            className={
              (selected === 1
                ? " bg-yellow-500 text-gray-900 "
                : " bg-blue-900 text-white") +
              " cursor-pointer lg:inline-flex lg:w-auto sm:mx-2 mx-5 my-2 px-6 py-2 rounded font-bold items-center justify-center hover:bg-yellow-500 hover:text-gray-900 "
            }
          >
            Volunteering{" "}
          </a>
          <a
            onClick={() => setSelected(2)}
            className={
              (selected === 2
                ? " bg-yellow-500 text-gray-900 "
                : " bg-blue-900 text-white") +
              " cursor-pointer lg:inline-flex lg:w-auto sm:mx-2 mx-5 my-2 px-6 py-2 rounded font-bold items-center justify-center  hover:bg-yellow-500 hover:text-gray-900 "
            }
          >
            Testimonial{" "}
          </a>
          <a
            onClick={() => setSelected(3)}
            className={
              (selected === 3
                ? " bg-yellow-500 text-gray-900 "
                : " bg-blue-900 text-white") +
              " cursor-pointer lg:inline-flex lg:w-auto sm:mx-2 mx-5 my-2 px-6 py-2 rounded font-bold items-center justify-center hover:bg-yellow-500 hover:text-gray-900 "
            }
          >
            Donation{" "}
          </a>
        </div>

        {selected == 1 && (
          <>
            {" "}
            <VolunteeringForm /> <Volunteers />{" "}
          </>
        )}
        {selected == 2 && <TestimonialForm />}
        {selected == 3 && <DonationForm />}
      </div>
    </> // TODO: Add Volunteers Cards
  );
}
