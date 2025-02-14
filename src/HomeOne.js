import { useState } from "react";

function HomeOne() {
  var [navMenu, setNavMenu] = useState("navbar-collapse collapse");
  var toggleInitialStatus = false;

  function toggleStatusChange() {
    if (toggleInitialStatus === false) {
      toggleInitialStatus = true;
      setNavMenu("navbar-collapse");
    } else {
      toggleInitialStatus = false;
      setNavMenu("navbar-collapse collapse");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container bg-black rounded">
        <a href="/home" className="nav-brand">
          <img
            src="https://d2b98ifobtd07j.cloudfront.net/logo2.png"
            width="120px"
            alt="Logo"
            className="p-2"
          />
        </a>
        <button
          class="navbar-toggler bg-light"
          onClick={(event) => toggleStatusChange()}
        >
          <span class="navbar-toggler-icon bg-light"></span>
        </button>
        <div className={navMenu}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link text-light fw-semibold">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-light fw-semibold">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link text-light fw-semibold">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link text-light fw-semibold">
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeOne;
