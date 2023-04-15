import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginContainer from "./LoginContainer";
import LoginForm from "./LoginForm";

const defaultFormField = {
  email: "",
  password: "",
};

// Shelter LOGIN
const Login = ({ setIsShelterLogin }) => {
  const [formField, setFormField] = useState(defaultFormField);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // It will update the state for every input change
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    //https://petadoptionteam.azurewebsites.net/
    fetch("http://localhost:5000/animalshelter/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formField),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsShelterLogin(true);

          navigate("/showpets");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => alert("Access Denied"));
  };

  return (
    <LoginContainer type="shelter">
      <LoginForm
        handleChange={handleChange}
        handleLogin={handleLogin}
        type={"shelter"}
        user={user}
      />
    </LoginContainer>
  );
};

export default Login;
