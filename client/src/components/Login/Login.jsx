import React, { useState } from 'react';
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiLockClosed,
} from 'react-icons/hi';
import wave from '../../assets/wave.svg';
import './Login.css';

const defaultFormField = {
  email: '',
  password: '',
};

const Login = () => {
  // State of Login Form
  const [formField, setFormField] = useState(defaultFormField);

  // It will update the state for every input change
  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  console.log(formField);

  const handleLogin = event => {
    event.preventDefault();
    
    fetch("http://localhost:5000/auth/login", {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(formField), 
    }) 
    .then(res => res.json()) 
    .then(data => {
      if (data.message == "Access Granted") {
        window.location.href = "/showpets";
      } else {
        alert(data.message);
      }
    })  
    .catch(err => alert("Access Denied")); 

    /*
    .then(res => res.json()) 
    .then(data => alert(JSON.stringify(data))) 
    .catch(err => alert("Access Denied"));  
    */
  };

  return (
    <div className='login__container'>
      <div className='text__container'>
        <h2>Welcome back!</h2>
        <p>Open your heart and home to a furry friend &mdash; Adopt now!</p>
      </div>
      <form className='login__container-form'>
        <div className='input__container'>
          <HiOutlineMail className='email__icon' />
          <input
            className='login__input'
            type='email'
            name='email'
            id='email'
            placeholder='email'
            onChange={handleChange}
          />
        </div>
        <div className='input__container'>
          <HiLockClosed className='email__icon' />
          <input
            className='login__input'
            type='password'
            onChange={handleChange}
            name='password'
            id='password'
            placeholder='password'
          />
        </div>
        <div className='btn__container'>
          <button type='button' className='login__btn btn_login btn-lg' onClick={handleLogin}>
            Login
          </button>
          <button type='button' className='login__btn btn_signup btn-lg'>
            Signup
          </button>
        </div>
      </form>
      <img className='wave' src={wave} alt='wave' />
    </div>
  );
};

export default Login;
