function Signup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3 className="mt-4 mb-4 text-danger fw-semibold">Sign Up</h3>
          <div className="mb-4">
            <label for="signupName" className="mb-2 text-primary fw-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              id="signupName"
            />
          </div>
          <div className="mb-4">
            <label for="signupemail" className="mb-2 text-primary fw-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              id="signupemail"
            />
          </div>
          <div className="mb-4">
            <label for="signuppassword" className="mb-2 text-primary fw-medium">
              Name
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="signuppassword"
            />
          </div>
          <button className="btn btn-primary">Sign Up</button>

          <div className="d-flex flex-column mt-3">
            <a href="/" className="text-decoration-none">
              Home
            </a>
            <a href="./login" className="text-decoration-none">
              Login
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

export default Signup;
