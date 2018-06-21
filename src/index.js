import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import "./styles.css";

// const App = ({ values, handleChange, handleSubmit }) => (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>
//     <p>This is just a quick bit of content.</p>

//     <form onSubmit={handleSubmit}>
//       <div>
//         <label for="email">Email address: </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="e.g. john@smith.com"
//           value={values.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label for="password">Password: </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Your password"
//           value={values.password}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <button className="btn btn-primary">Submit</button>
//       </div>
//     </form>
//   </div>
// );

const App = ({ values, errors, touched }) => (
  <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <p>This is just a quick bit of content.</p>

    <Form>
      
      <Email
        radId="email"
        label="Busines email"
        placeholder="Your email address"
        errors={errors}
        touched={touched}
      />
      

      <div>
        <label htmlFor="password">Password: </label>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Your password"
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>
          <Field
            type="checkbox"
            name="newsletter"
            checked={values.newsletter}
          />
          &nbsp;Join our newsletter
        </label>
      </div>
      <div>
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>
      </div>
      <div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </Form>
  </div>
);

const Email = ({ radId, placeholder, label, errors, touched }) => (
  <div>
    <label htmlFor="email">{label || "Email address"}:&nbsp;</label>
    {touched[radId] && errors[radId] && <p>{errors[radId]}</p>}
    <Field
      type="email"
      id={radId}
      name={radId}
      placeholder={placeholder || "e.g. johnny@smith.com"}
    />
  </div>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || true,
      plan: plan || "free"
    };
  },
  validationSchema: Yup.object().shape({    
    email: Yup.string().email().required(),
    password: Yup.string().min(9).required(),
  }),
  handleSubmit(values) {
    // alert("handling submit!");
    console.log(values);
  }
  // mapPropsToValues1: () => ({
  //   email: 'some text'
  // })
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp email="james@last.com" />, rootElement);
