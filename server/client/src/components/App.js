import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { handleFormInput } from "./../actions";
import "./App.css";

const App = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  //   const handleFormInput = async (values) => {
  //     const res = await axios.post("/api/signup", values);
  //     const data = await res.json();
  //   };

  const usernameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const onFormContent = (e) => {
    e.preventDefault();

    const registered = {
      username: enteredUsername,
      password: enteredPassword,
    };

    const testing = async () => {
      const res = await axios.post("/api/signup", registered);
      const data = await res.json();
      console.log(data);
    };

    testing();
    setEnteredUserName("");
    setEnteredPassword("");
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <h4>It's free, and only takes a minute</h4>
      <form onSubmit={onFormContent}>
        <label>Username</label>
        <input
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={passwordChangeHandler}
          value={enteredPassword}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

// function mapStateToProps(state) {
//   return state.newUser;
// }

export default App;
