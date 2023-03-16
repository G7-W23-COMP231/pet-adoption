import React, { useState } from 'react';

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
  console.log(formField);

  return (
    <div className=''>
      <form className=''>
        <h2>Log in</h2>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            onChange={handleChange}
            name='password'
            id='password'
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
