import axios from "../../axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useGlobalState } from "../../GlobalContextProvider";

const Login = () => {
  const [{ user }, dispatch] = useGlobalState();
  const Navigate = useNavigate();
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);
  const [errD, setErrD] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === null || pass === null) {
      setErrD(() => {
        return "the fields are empty";
      });
    }
    //   backend
    async function backAuth() {
      // const res = await axios.get("/authlogin");
      const res = await fetch(
        `http://localhost:4000/authlogin?username=${name}&pass=${pass}`
      );
      if (res.valid == true) {
        dispatch({
          type: "LOG_IN",
          user: res,
        });
        Navigate("/");
      }
    }
    backAuth();
  };

  return (
    <div className="Login__wrapper">
      <form onSubmit={handleLogin} className="Login__wrapper-form">
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button>Login</button>

        {errD ? <p>{errD}</p> : null}
      </form>
    </div>
  );
};

export default Login;
