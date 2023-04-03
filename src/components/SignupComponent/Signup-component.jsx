const Signup = () => {
  return (
    <div className="form-container">
      <h1 className="title-login">Login</h1>
      <form className="form-container" action="">
        <input type="text" placeholder="Email address" />
        <input type="passord" placeholder="Password" />
        <button className="login-btn" type="submit">
          Login to your account
        </button>

        <p>
          Don't have any account? <a href="#abc">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
