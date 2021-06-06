import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import Select from "react-select";

export const VolunteeringForm = () => {
  const [country, setCountry] = useState(null);
  const [codes, setCodes] = useState([]);
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (!/^[0-9]+$/.test(values.phoneNumber)) {
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
        console.log(data);
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
          profession: "",
          skills: [],
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
            className="flex flex-col w-1/2 p-6"
          >
            <label htmlFor="firstName">First Name</label>
            <input
              className="p-1 w-1/2 h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
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
              className="p-1 w-1/2 h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
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
              className="p-1 w-1/2 h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
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
            <div className="flex items-baseline">
              <Select
                className="w-1/4 mr-1 border-solid border-2 border-blue-900 rounded-md"
                options={codes}
                onChange={(a) => {
                  setCountry(a.value);
                }}
              />
              <input
                className="p-1 w-1/2 h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
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
            <label htmlFor="lastName">Profession</label>
            <input
              className="p-1 w-1/2 h-10 my-1 border-solid border-2 border-blue-900 rounded-md"
              id="profession"
              name="profession"
              type="text"
              onChange={props.handleChange}
              value={props.values.profession}
            />
            <div id="checkbox-group">{"Skills & Interests"}</div>
            <div
              className="flex flex-wrap"
              role="group"
              aria-labelledby="checkbox-group"
            >
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Graphic Design"
                  className="mx-1"
                />
                Graphic Design
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Video Making"
                  className="mx-1"
                />
                Video Making{" "}
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Community Management"
                  className="mx-1"
                />
                Community Management
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="IT"
                  className="mx-1"
                />
                IT
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Public Speaking"
                  className="mx-1"
                />
                Public Speaking
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Photography"
                  className="mx-1"
                />
                Photography
              </label>
            </div>

            <button
              type="submit"
              className={
                "w-1/5 my-4 px-6 py-2 rounded font-bold items-center justify-center bg-blue-900 hover:bg-yellow-500 text-white hover:text-gray-900 "
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
    <div className="w-1/2 p-2 m-1 rounded-lg border-solid border-2 border-red-900 bg-red-200 text-red-900">
      {text}
    </div>
  );
};
