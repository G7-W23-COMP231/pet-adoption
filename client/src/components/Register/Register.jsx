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
  const [formField, setformField] = useState(defaultFormField);
  console.log(formField);

  const { password, confirmPassword } = formField;

  const resetFormFields = () => {
    setformField(defaultFormField);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setformField({ ...formField, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    try {
      // code for validation
      console.log('Signed up');
      alert(`signed up`);
      resetFormFields();
    } catch (error) {}
  };

  return (
    <div className='register__container'>
      <div className='left'></div>
      <form onSubmit={handleSubmit} className='register__container-form'>
        <div className='register__containter-form_title'>
          <h2>I don't have an account</h2>
          <span>Sign up with your email and password</span>
        </div>

        <div>
          <input
            type='text'
            name='shelterName'
            placeholder='shelter Name'
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

        <button className='btn__signup'>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
