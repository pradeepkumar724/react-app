function Home() {
  var loginUserId = localStorage.getItem("loginUserId");
  console.log(loginUserId);

  function handleLogout(){
    localStorage.clear();
    // console.log(localStorage.getItem("loginUserId"))
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-row justify-content-between mt-5">
            <div className="col-9">
              <h2 className="fw-semibold fs-2 text-center">
                Vashista 360 - Spoken English Course
              </h2>
            </div>

            <div className="col-3 d-flex flex-row justify-content-between align-items-center">
              <a href="/signup" className="text-decoration-none">
                Signup
              </a>
              <a href="/login" className="text-decoration-none">
                Login
              </a>
              <a href="/resetpassword" className="text-decoration-none">
                Forgot Password
              </a>
            </div>
          </div>
          <div className="col-6 mt-4 text-primary">
            <h4>WelCome To Vashista 360 - Spoken English Course</h4>
            {loginUserId !== null && <div className="mt-4"><button className="btn btn-danger fw-semibold" onClick={event => handleLogout()}>Log out</button></div>}
            {loginUserId === null && <div className="mt-4"><a href="/login"><button className="btn btn-primary mr-4">Login</button></a> <a href="/signup"><button className="btn btn-primary mr-4">Signup</button></a></div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
