import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import Select from "react-select";

export const TestimonialForm = () => {
  const [country, setCountry] = useState(null);
  const [codes, setCodes] = useState([]);
  const validate = (values) => {
    const errors = {};
    if (!values.story) {
      errors.story =
        "You are kindly asked to share your story with us. This is a required field.";
    }
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (values.phoneNumber && !/^[0-9]+$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    return errors;
  };
  const getData = () => {
    fetch("phoneCountry.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        data = data.map((c) => {
          return { value: c.dial_code, label: c.dial_code + " " + c.name };
        });
        setCodes(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          story: "",
          statusOfSharing: "",
        }}
        onSubmit={(values) => {
          values.countryCode = country;
          alert(JSON.stringify(values, null, 2));
        }}
        validate={validate}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="flex flex-col sm:w-1/2 w-full sm:p-6 p-2"
          >
            <label htmlFor="firstName">First Name</label>
            <input
              className="sm:p-1 p-0 sm:w-1/2 w-full h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
              id="firstName"
              name="firstName"
              type="text"
              onChange={props.handleChange}
              value={props.values.firstName}
            />
            {props.errors.firstName ? (
              <FormAlert text={props.errors.firstName} />
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <input
              className="sm:p-1 p-0 sm:w-1/2 w-full h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
              id="lastName"
              name="lastName"
              type="text"
              onChange={props.handleChange}
              value={props.values.lastName}
            />
            {props.errors.lastName ? (
              <FormAlert text={props.errors.lastName} />
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
              className="sm:p-1 p-0 sm:w-1/2 w-full h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
              id="email"
              name="email"
              type="email"
              onChange={props.handleChange}
              value={props.values.email}
            />
            {props.errors.email ? (
              <FormAlert text={props.errors.email} />
            ) : null}
            <label htmlFor="phoneNumber">Phone Number</label>
            <div className="flex sm:flex-row flex-col items-baseline">
              <Select
                className="sm:w-1/4 w-1/2 mr-1 border-solid border-2 border-blue-900 rounded-md"
                options={codes}
                onChange={(a) => {
                  setCountry(a.value);
                }}
              />
              <input
                className="sm:p-1 p-0 sm:w-1/2 w-full h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={props.handleChange}
                value={props.values.phoneNumber}
              />
            </div>
            {props.errors.phoneNumber ? (
              <FormAlert text={props.errors.phoneNumber} />
            ) : null}
            <label htmlFor="story">Tell us about your story</label>
            <textarea
              className="sm:p-1 p-0 sm:w-3/4 w-full h-52 my-1 border-solid border-2 border-blue-900 rounded-md"
              id="story"
              name="story"
              onChange={props.handleChange}
              value={props.values.story}
            />
            {props.errors.story ? (
              <FormAlert text={props.errors.story} />
            ) : null}

            <div id="my-radio-group">
              Would you be interested to share your story in public?
            </div>
            <div role="group" aria-labelledby="my-radio-group">
              <label className="mx-1">
                <Field
                  className="mx-1"
                  type="radio"
                  name="statusOfSharing"
                  value="Yes"
                />
                Yes
              </label>
              <label className="mx-1">
                <Field
                  className="mx-1"
                  type="radio"
                  name="statusOfSharing"
                  value="Yes, but anonymously"
                />
                Yes, but anonymously
              </label>
              <label className="mx-1">
                <Field
                  className="mx-1"
                  type="radio"
                  name="statusOfSharing"
                  value="No"
                />
                No
              </label>
            </div>

            <button
              type="submit"
              className={
                "sm:w-1/5 w-1/2 my-4 px-6 py-2 rounded font-bold items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 "
              }
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

const FormAlert = ({ text }) => {
  return (
    <div className="sm:w-1/2 w-full p-2 my-1 rounded-lg border-solid border-2 border-red-900 bg-red-200 text-red-900">
      {text}
    </div>
  );
};
