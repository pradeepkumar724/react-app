import { useState } from "react";
import emailValidationss from "../Utils/emailValidationss";
import axios from "axios";

function Signup() {
  // useState Variable

  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [mobile, setMobile] = useState("");
  var [password, setPassword] = useState("");

  // Validation Errors Variables

  var [nameError, setNameError] = useState("");
  var [emailError, setEmailError] = useState("");
  var [mobileError, setMobileError] = useState("");
  var [passWordError, setPasswordError] = useState("");

  var [apiErrorMsg, setApiErrorMsg] = useState("");
  var [apiSuccessMsg, setApiSuccessMsg] = useState("");

  // Api Validation

  var noOfError = 0;

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeMobile(event) {
    setMobile(event.target.value);
  }

  function handleChangePword(event) {
    setPassword(event.target.value);
  }

  async function handleCreateAccount() {
    // For Name Validation
    if (name.length >= 3) {
      setNameError("");
    } else {
      setNameError("Name should be Min 3 Char");
      noOfError++;
    }

    // For Email validation
    if (emailValidationss(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter Vaild Email Id");
      noOfError++;
    }

    // For Mobile Validation

    if (mobile.length === 10) {
      setMobileError("");
    } else {
      setMobileError("Enter Valid Mobile Number");
      noOfError++;
    }

    // For Password Validation

    if (password.length >= 8) {
      setPasswordError("");
    } else {
      setPasswordError("Password Must be 8 Char");
      noOfError++;
    }

    // API Handling

    if (noOfError === 0) {
      console.log("API Calling ....");
      var apiInputData = {
        email: email,
        name: name,
        mobile: mobile,
        password: password,
      };

      var apiResponse = await axios.post(
        "https://api.softwareschool.co/auth/signup",
        apiInputData
      );
      // console.log(apiResponse.data.result);
      // console.log(apiResponse.data.message);

      if (apiResponse.data.result === "SUCCESS") {
        // console.log(apiResponse.data.message);
        setApiSuccessMsg(apiResponse.data.message);
        setApiErrorMsg("");
      } else {
        // console.log(apiResponse.data.message)
        setApiErrorMsg(apiResponse.data.message);
        setApiSuccessMsg("");
      }
    }

    // console.log(name + " - " +  email + " - " + mobile + " - " +  password)
  }

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
              onChange={(event) => handleChangeName(event)}
            />
            <div className="mt-1">
              <p className="text-danger fw-medium fs-6">{nameError}</p>
            </div>
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
              onChange={(event) => handleChangeEmail(event)}
            />
            <div className="mt-2">
              <p className="text-danger fw-medium fs-6">{emailError}</p>
            </div>
          </div>
          <div className="mb-4">
            <label for="signuppassword" className="mb-2 text-primary fw-medium">
              Mobile
            </label>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="form-control"
              id="signupnumber"
              onChange={(event) => handleChangeMobile(event)}
            />
            <div className="mt-2">
              <p className="text-danger fw-medium fs-6">{mobileError}</p>
            </div>
          </div>
          <div className="mb-4">
            <label for="signuppassword" className="mb-2 text-primary fw-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="signuppassword"
              onChange={(event) => handleChangePword(event)}
            />
            <div className="mt-2">
              <p className="text-danger fw-medium fs-6">{passWordError}</p>
            </div>
          </div>
          <button
            className="btn btn-primary mb-2"
            onClick={(event) => handleCreateAccount()}
          >
            Create Account
          </button>
          <div>
            <p className="alert alert-success">{apiSuccessMsg}</p>
          </div>
          <div>
            <p className="alert alert-danger">{apiErrorMsg}</p>
          </div>
          <br /> {name} <br /> {email} <br /> {mobile} <br /> {password}
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
