import React, { useState } from "react";

import LoginContainer from "./LoginContainer";
import LoginForm from "./LoginForm";

const defaultFormField = {
  email: "",
  password: "",
};

// Shelter LOGIN
const Login = () => {
  const [formField, setFormField] = useState(defaultFormField);

  // It will update the state for every input change
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    //fetch('http://localhost:5000/auth/login', {
    fetch("http://localhost:5000/animalshelter/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formField),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "/showpets";
        } else {
          alert(data.message);
        }
      })
      .catch((err) => alert("Access Denied"));

    /*
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    */
  };

  return (
    <LoginContainer>
      <LoginForm
        handleChange={handleChange}
        handleLogin={handleLogin}
        type={"shelter"}
      />
    </LoginContainer>
  );
};

export default Login;
