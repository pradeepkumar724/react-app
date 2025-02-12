function Resetpassword() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3 className="mt-4 mb-4 text-danger fw-semibold">Forgot Password</h3>
          <div className="mb-4">
            <label
              className="text-primary mb-2 fw-medium"
              for="forgorpasswordname"
            >
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="forgorpasswordname"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-primary mb-2 fw-medium"
              for="forgorpasswordname"
            >
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="forgorpasswordemail"
              placeholder="Enter Email"
            />
          </div>
          <button className="btn btn-primary">Reset Password</button>
          <div className="d-flex flex-column mt-3">
            <a href="/" className="text-decoration-none">
              Home
            </a>
            <a href="./login" className="text-decoration-none">
              Login
            </a>
            <a href="./signup" className="text-decoration-none">
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
