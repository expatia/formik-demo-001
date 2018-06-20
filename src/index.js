import React from "react";
import ReactDOM from "react-dom";
import { withFormik } from 'formik';
import Yup from 'yup';

import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <p>This is just a quick bit of content.</p>
//       <div>Just a quick test.</div>
//     </div>
//   );
// }

const App = ({values}) => (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>This is just a quick bit of content.</p>
      <div>
        <input type='email' name='email' placeholder='e.g. john@smith.com' value={values.email}/>
      </div>
    </div>
);

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      email: 'test text'
    }
  },
  mapPropsToValues1: () => ({
    email: 'some text'
  })  
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp />, rootElement);
