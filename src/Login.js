function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3 className="mt-4 mb-4 text-danger fw-semibold">Log in</h3>
          <div className="mb-3">
            <label for="logintext" className="mb-1 text-primary fw-medium">
              Email
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="form-control"
              id="logintext"
            />
          </div>
          <div>
            <label for="loginpassword" className="mb-1 text-primary fw-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              id="loginpassword"
            />
          </div>
          <button className="btn btn-primary mt-4"> Login </button>
          <div className="d-flex flex-column mt-3">
            <a href="/" className="text-decoration-none">
              Home
            </a>
            <a href="./signup" className="text-decoration-none">
              Signup
            </a>
            <a href="./resetpassword" className="text-decoration-none">
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
