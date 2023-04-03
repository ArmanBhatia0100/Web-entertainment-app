import React from "react";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <div className="loginPage-container">
      <div className="logo-container">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="form-container">
        <h1 className="title-login">Sign Up</h1>
        <form className="form-container" action="">
          <input type="text" placeholder="Email address" />
          <input type="passord" placeholder="Password" />
          <input type="passord" placeholder="Repeat Password" />
          <button className="login-btn" type="submit">
            Create an account
          </button>
          <p>
            Already have an account? <button type="button">Login</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
