import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
//import e from "express";

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const onchangeUsername = (e) => {
    setEnteredUsername(e.target.value);
  };

  const onchangePassword = (e) => {
    setEnteredPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const login = {
      username: enteredUsername,
      password: enteredPassword,
    };

    const testing = async () => {
      const res = await axios.post("/api/login", login);
      const data = await res.json();
      console.log(data);
    };

    testing();
    setEnteredUsername("");
    setEnteredPassword("");
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type="text"
          onChange={onchangeUsername}
          value={enteredUsername}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={onchangePassword}
          value={enteredPassword}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
