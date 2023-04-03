import React from "react";
import "./LoginPage.scss";
function LoginPage() {
  return (
    <div className="loginPage-container">
      <div className="logo-container">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="form-container">
        <h1 className="title-login">Login</h1>
        <form className="form-container" action="">
          <input type="text" placeholder="Email address" />
          <input type="passord" placeholder="Password" />
          <button className="login-btn" type="submit">
            Login to your account
          </button>
          <p>
            Don't have any account? <button type="button">Sign Up</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
