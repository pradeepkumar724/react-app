import { useState } from "react";

function Signup() {

  // useState Variable

  var [name,setName] = useState("");
  var [email,setEmail] = useState("");
  var [mobile,setMobile] = useState("");
  var [password,setPassword] = useState("");


  function handleChangeName(event){
    setName(event.target.value);
  }

  function handleChangeEmail(event){
   setEmail(event.target.value);
  }

  function handleChangeMobile(event){
    setMobile(event.target.value);
  }

  function handleChangePword(event){
    setPassword(event.target.value);
  }

  function handleCreateAccount(){
    console.log(name + " - " +  email + " - " + mobile + " - " +  password)
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
              onChange = {event => handleChangeName(event)}
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
              onChange={event => handleChangeEmail(event) }
            />
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
              onChange={event => handleChangeMobile(event)}
            />
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
              onChange={event => handleChangePword(event)}
            />
          </div>
          <button className="btn btn-primary mb-2" onClick={event => handleCreateAccount()}>Create Account</button>
          <br/>



          {name} <br/> {email} <br/> {mobile} <br/> {password}

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
