import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginContainer from "./LoginContainer";
import LoginForm from "./LoginForm";

const defaultFormField = {
  email: "",
  password: "",
};

// Login for potential pet owner
function UserLogin({ setIsUserLogin }) {
  const [formField, setFormField] = useState(defaultFormField);
  console.log(formField);
  const navigate = useNavigate();

  // It will update the state for every input change
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    //fetch('http://localhost:5000/auth/login', {
    fetch("https://petadoptionteam.azurewebsites.net/owner/userlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formField),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsUserLogin(true);
          navigate("/showpets");
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
    <LoginContainer type="user">
      <LoginForm
        handleChange={handleChange}
        handleLogin={handleLogin}
        type={"user"}
      />
    </LoginContainer>
  );
}

export default UserLogin;
