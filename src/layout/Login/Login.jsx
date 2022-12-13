import React, { useState } from "react";

import IconInput from "../../components/utils/IconInput/IconInput";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { login } from "../../redux/leftMenu/LeftMenu.actions";

import Checkmark from "../../components/utils/Checkmark/Checkmark";

import "./Login.scss";

const Login = ({ setLoggedIn, login }) => {
  const [username, setUsername] = useState("email@email.com");
  const [password, setPassword] = useState("azertyuiop");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login();
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-logo">{`{Logo}`}</div>
      <div className="login__header">
        <h4>Sign in</h4>
        <p>Sign in to continue to Chatvia</p>
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
          Don't have an account ? <a href="#">Signup now</a>
        </p>
        <p className="u-mb-l">
          © 2022 Chatvia. Crafted with <i className="ri-heart-fill" /> by
          Oussama
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
});

export default connect(null, mapDispatchToProps)(Login);
