import { useState } from "react";
import emailValidationss from '../Utils/emailValidationss'

function Login() {

  var noOfError = 0;

  // Use State Variables

  var [emailLogin,setEmailLogin] = useState("");
  var [passwordLogin,setPasswordLogin] = useState("");


  // Validation Variables

  var [emailLoginError,setemailLoginError] = useState("");
  var [passwordLoginError, setpasswordLoginError] = useState("");


  function handlerChangeName(event){
    setEmailLogin(event.target.value);
  }

  function handlerChangeEmail(event){
    setPasswordLogin(event.target.value);
  }


  function handlerLoginClick(){

    // Email validation

    if(emailValidationss(emailLogin)){
      setemailLoginError("");
    }else{
      setemailLoginError("Enter valid Email");
      noOfError++;
    }

    // Password validation

    if(passwordLogin.length>=8){
      setpasswordLoginError("");
    }else{
      setpasswordLoginError("Enter Valid Password");
      noOfError++;
    }

    if(noOfError === 0){
      console.log("Your in Login")
    }


  }



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
              onChange={event => handlerChangeName(event)}
            />
            <div className="mb-2">
              <p className="text-danger fw-medium fs-6">{emailLoginError}</p>
            </div>
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
              onChange={event => handlerChangeEmail(event)}
            />
            <div className="mb-2">
              <p className="text-danger fw-medium fs-6">{passwordLoginError}</p>
            </div>
          </div>
          <button className="btn btn-primary mt-4" onClick={event => handlerLoginClick()}> Login </button>

          <br/>{emailLogin} <br/>{passwordLogin}<br/>

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
