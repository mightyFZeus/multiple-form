import React from "react";
import './Form.css'
import useForm from './UseForm'
import Validateinfo from './ValidateInfo'

function FormSignUp() {
const {handleChange,values,handleSubmit, errors} =useForm(Validateinfo)
 

  return (
    <div className="form-content">
      <form 
      onSubmit={handleSubmit}
      className="form">
        <h1>Get started with us </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-inputs"
            name="username"
            placeholder="enter your username"
            id='username'
            value={values.username}
            onChange={handleChange}
          ></input>
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-inputs"
            name="email"
            placeholder="enter your email"
            id='email'
            value={values.email}
            onChange={handleChange}
         
          ></input>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-inputs"
            name="password"
            placeholder="enter your password"
            id='password'
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-inputs"
            name="password2"
            placeholder="enter your password"
            id='password2'
            value={values.password2}
            onChange={handleChange}
          ></input>
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type=''submit>Sign up</button>
        <span className='form-input-login'>
            Already have and account? login <a href='#'></a>
        </span>
        
      </form>
    </div>
  );
}

export default FormSignUp;
