import React from "react";
import ReactDOM from "react-dom";
import { withFormik } from 'formik';
import Yup from 'yup';

import "./styles.css";


const App = ({values, handleChange, handleSubmit}) => (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>This is just a quick bit of content.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label for='email'>Email address: </label>
          <input type='email' id='email' name='email' placeholder='e.g. john@smith.com' value={values.email} onChange={handleChange}/>
        </div>
        <div>
          <label for='password'>Password: </label>
          <input type='password' id='password' name='password' placeholder='Your password' value={values.password} onChange={handleChange} />
        </div>   
        <div>
          <button className='btn btn-primary'>Submit</button>
        </div> 
      </form>  
    </div>
);


const FormikApp = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  handleSubmit(values) {
    alert('handling submit!');
  }
  // mapPropsToValues1: () => ({
  //   email: 'some text'
  // })  
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp email='james@last.com'/>, rootElement);
