import React, { useState } from 'react';
import './Register.css';

const defaultFormField = {
  confirmPassword: '',
  email: '',
  location: 'ABCD',
  password: '',
  shelterName: '',
};

const Register = () => {
  const [formField, setFormField] = useState(defaultFormField);

  const { password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formField }),
    })
      .then(res => res.json())
      .then(data => alert(data));
  };

  return (
    <div className='register__container'>
      <div className='left'></div>
      <form className='register__container-form'>
        <div className='register__containter-form_title'>
          <h2>I don't have an account</h2>
          <span>Sign up with your email and password</span>
        </div>

        <div>
          <input
            type='text'
            name='shelterName'
            placeholder='shelter name'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <select name='location' onChange={handleChange}>
            <option value='ABCD'>ABCD</option>
            <option value='EFGH'>EFGH</option>
            <option value='IJKL'>IJKL</option>
            <option value='MNOP'>MNOP</option>
          </select>
        </div>
        <div>
          <input
            type='email'
            name='email'
            placeholder='email'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type='password'
            name='confirmPassword'
            placeholder='confirm password'
            onChange={handleChange}
            required
          />
        </div>

        <button className='btn__signup' onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
