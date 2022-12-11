import React from "react";
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      if (values.emailField && values.pswField) alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) {
        errors.emailField = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)
      ) {
        errors.emailField = "Username should be an email";
      }

      if (!values.pswField) errors.pswField = "Field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          id="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        ></input>
        {formik.errors.emailField ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.emailField}
          </div>
        ) : null}
        <div>Password</div>
        <input
          id="pswField"
          type="text"
          onChange={formik.handleChange}
          values={formik.values.pswField}
        ></input>
        {formik.errors.pswField ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.pswField}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
