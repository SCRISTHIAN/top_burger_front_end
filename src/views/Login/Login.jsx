import React from 'react';
import './style/index.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { upForm } from '../../services/up.servicies';

const Login = () => {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const upForm = async () => {
    try {
      const response = await axios.post(
        "https://flask-production-fc0d.up.railway.app/login",
        {
          user,
          password,
        }
      );
      if (response.data){
        navigate('/dashboard')
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoginError("Error de conexion");
    }
  };

  const clickButton = () => {
    upForm();
  };

  const enterKey = (event) => {
    if (event.key === "Enter") {
      upForm();
    }
  };

  return (
    <div className="view">
      <div className="container-login">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <div className="inputs-login">
          <input
            type="text"
            id="username"
            className="user-name"
            placeholder="Username:"
            value={user}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="pass-word"
            placeholder="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={enterKey}
          />
        </div>
        <div className="button-login">
          <button onClick={clickButton}>Login</button>
        </div>
      </div>
      <div className="draw-container">
        <img
          src="../src/assets/images/HamburguesaLogin.png"
          className="i1"
          alt="no furulo we"
        />
        <img
          src="../src/assets/images/HamburguesaLogin.png"
          className="i2"
          alt="no furulo we"
        />
        <img
          src="../src/assets/images/HamburguesaLogin.png"
          className="i3"
          alt="no furulo we"
        />
        <img
          src="../src/assets/images/HamburguesaLogin.png"
          className="i4"
          alt="no furulo we"
        />
        <img src="../src/assets/images/draw.png" className="draw" alt="no furulo we"
        />
      </div>
    </div>
  );
};
export default Login;