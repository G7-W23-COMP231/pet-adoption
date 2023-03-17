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
          <button type='button' className='login__btn btn_login btn-lg'>
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
