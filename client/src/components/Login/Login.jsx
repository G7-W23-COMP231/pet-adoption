import React, { useState } from 'react';
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiLockClosed,
} from 'react-icons/hi';
import './Login.css';

const defaultFormField = {
  email: '',
  password: '',
};

const Login = () => {
  const [formField, setFormField] = useState(defaultFormField);

  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className='login__container'>
      <div className='login__container-right'>
        <div className='text__container'>
          <h2>Welcome back!</h2>
          <span>Open your heart and home to a furry friend - Adopt now!</span>
        </div>
        <form className='login__container-form'>
          <div className='input__container'>
            <HiOutlineMail className='email__icon' />
            <input
              className='login__input'
              type='email'
              name='email'
              id='email'
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
      </div>
    </div>
  );
};

export default Login;
