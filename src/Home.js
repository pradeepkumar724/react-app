function Home() {
  return (
    <div className="container">
      <div className="row d-flex flex-row justify-content-between mt-5">
        <div className="col-9">
          <h2 className="fw-semibold fs-2 text-center">
            Vashista 360 - Spoken English Course
          </h2>
        </div>

        <div className="col-3 d-flex flex-row justify-content-between align-items-center">
          <a href="/signup" className="text-decoration-none">
            Signup
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
  );
}

export default Home;
