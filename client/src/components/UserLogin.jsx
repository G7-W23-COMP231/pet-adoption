import React, { useState } from 'react';

import LoginContainer from './LoginContainer';
import LoginForm from './LoginForm';

const defaultFormField = {
  email: '',
  password: '',
};

// Login for potential pet owner
function UserLogin() {
  const [formField, setFormField] = useState(defaultFormField);
  console.log(formField);

  // It will update the state for every input change
  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleLogin = event => {
    event.preventDefault();

    //fetch('http://localhost:5000/auth/login', {
    fetch('http://localhost:5000/animalshelter/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formField),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == 'Access Granted') {
          window.location.href = '/showpets';
        } else {
          alert(data.message);
        }
      })
      .catch(err => alert('Access Denied'));

    /*
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    */
  };
  return (
    <LoginContainer type='userLogin'>
      <LoginForm handleChange={handleChange} handleLogin={handleLogin} />
    </LoginContainer>
  );
}

export default UserLogin;
