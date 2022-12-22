import React, { useState, useEffect } from "react";

import logo from "../../assets/aodev-logo-md.png";
import IconInput from "../../components/utils/IconInput/IconInput";

import { connect } from "react-redux";

import { login } from "../../redux/auth/auth.actions";

import Checkmark from "../../components/utils/Checkmark/Checkmark";

import "./Login.scss";

const Login = ({ login }) => {
  const [username, setUsername] = useState("email@email.com");
  const [password, setPassword] = useState("azertyuiop");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    const loginTimeout = setTimeout(() => {
      login();
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(loginTimeout);
    };
  }, [isLoading, login]);

  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login__header">
        <h4>Sign in</h4>
        <p>Sign in to continue to the chat app</p>
      </div>
      <div className="login-form__container">
        <IconInput
          name="Username"
          value={username}
          setValue={setUsername}
          type="text"
          icon="ri-user-2-line"
        />
        <IconInput
          name="Password"
          value={password}
          setValue={setPassword}
          type="password"
          className="u-mb-s"
          icon="ri-lock-line"
        />
        <div className="r-me u-mb-s">
          <Checkmark checked={rememberMe} setChecked={setRememberMe} />
          <p onClick={() => setRememberMe(!rememberMe)}>Remember me</p>
        </div>
        <div className="login__cta">
          <button onClick={handleLogin}>
            {isLoading ? (
              <div className="spinner">
                <i className="ri-restart-line" />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
      <div className="login__footer">
        <p className="u-mb-s">
          Don't have an account ? <button>Signup now</button>
        </p>
        <p className="u-mb-l">
          © 2022 AoDev. Crafted with <i className="ri-heart-fill" /> by Oussama
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
});

export default connect(null, mapDispatchToProps)(Login);
