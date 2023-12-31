const LoginPage = () => {
  return (
    <>
      <h1>Sign in</h1>
      <input placeholder="username" />
      <input placeholder="password" />
      <button>Log in</button>
      <label htmlFor="remember-me">remember me</label>
      <input type="checkbox" id="remember-me" />
      <a href="#">Forgot password</a>
    </>
  );
};

export default LoginPage;
