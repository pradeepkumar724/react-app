import { useState } from "react";

function Address() {

    var noOfErrors = 0;

  // State Variables

  var [userBuildingNumber, setUserBuildingNumber] = useState("");
  var [userStreet, setUserStreet] = useState("");
  var [userCity, setUserCity] = useState("");
  var [userState, setUserState] = useState("");
  var [userCountry, setUserCountry] = useState("");
  var [userPincode, setUserPincode] = useState("");

  //   Error Variables

  var [userBuildingNumberError, setUserBuildingNumberError] = useState("");
  var [userStreetError, setUserStreetError] = useState("");
  var [userCityError, setUserCityError] = useState("");
  var [userStateError, setUserStateError] = useState("");
  var [userCountryError, setUserCountryError] = useState("");
  var [userPincodeError, setUserPincodeError] = useState("");

  //   Handler Functions

  function handleUserBuildingChange(event) {
    setUserBuildingNumber(event.target.value);
  }
  function handleUserStreetChange(event) {
    setUserStreet(event.target.value);
  }
  function handleUserCityChange(event) {
    setUserCity(event.target.value);
  }
  function handleUserStateChange(event) {
    setUserState(event.target.value);
  }
  function handleUserCountryChange(event) {
    setUserCountry(event.target.value);
  }
  function handleUserPincodeChange(event) {
    setUserPincode(event.target.value);
  }

  //   Form Validations

  function handlerConfrimAddress() {
    if (userBuildingNumber.length >= 3) {
      setUserBuildingNumberError("");
    } else {
      setUserBuildingNumberError("Min 3 Char Required");
      noOfErrors++;
    }

    if (userStreet.length >= 3) {
      setUserStreetError("");
    } else {
      setUserStreetError("Min 3 Char Required");
      noOfErrors++;
    }

    if (userCity.length >= 3) {
      setUserCityError("");
    } else {
      setUserCityError("Min 3 Char Required");
      noOfErrors++;
    }

    if (userState === "") {
      setUserStateError("Please Select State");
      noOfErrors++;
    } else {
      setUserStateError("");
    }

    if (userCountry === "") {
      setUserCountryError("Please Select Country");
      noOfErrors++;
    } else {
      setUserCountryError("");
    }

    if (userPincode.length >= 6) {
      setUserPincodeError("");
    } else {
      setUserPincodeError("Pincode is Required");
      noOfErrors++;
    }

    if(noOfErrors === 0){
        console.log("Address is Saved")
       
    }
    else{
        console.log("Fill Form Correctly")
    }



    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mt-4">
          <h1 className="text-danger fs-3 mb-4">User Address</h1>
          <div className="mb-4">
            <label for="buildingNumber" className="mb-1 text-primary fw-medium">
              Building Number
            </label>
            <input
              type="text"
              placeholder="Building number"
              className="form-control"
              id="buildingNumber"
              onChange={(event) => handleUserBuildingChange(event)}
            />
            <div className="mt-1">
              <p className="text-danger fw-medium fs-6">
                {userBuildingNumberError}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label for="streetName" className="mb-1 text-primary fw-medium">
              Street Name
            </label>
            <input
              type="text"
              placeholder="Street name"
              className="form-control"
              id="streetName"
              onChange={(event) => handleUserStreetChange(event)}
            />
            <div className="mt-1">
              <p className="text-danger fw-medium fs-6">{userStreetError}</p>
            </div>
          </div>
          <div className="mb-4">
            <label for="city" className="mb-1 text-primary fw-medium">
              City
            </label>
            <input
              type="text"
              placeholder="City..."
              className="form-control"
              id="city"
              onChange={(event) => handleUserCityChange(event)}
            />
            <div className="mt-1">
              <p className="text-danger fw-medium fs-6">{userCityError}</p>
            </div>
          </div>
          <div>
            <label
              for="selectStateOption"
              className="mb-1 text-primary fw-medium"
            >
              Select State
            </label>
            <select
              id="selectStateOption"
              className="form-select"
              onChange={(event) => handleUserStateChange(event)}
            >
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
            </select>
            <div className="mt-1">
              <p className="text-danger fw-medium fs-6">{userStateError}</p>
            </div>
          </div>
          <div className="form-check">
            <h5 className="text-primary fs-5 mt-4">Select Country</h5>
            <div>
              <lable for="India">India</lable>
              <input
                type="radio"
                value="India"
                name="country"
                className="form-check-input"
                onChange={(event) => handleUserCountryChange(event)}
              />
            </div>
            <div>
              <lable for="India">USA</lable>
              <input
                type="radio"
                value="USA"
                name="country"
                className="form-check-input"
                onChange={(event) => handleUserCountryChange(event)}
              />
              <div className="mt-1">
                <p className="text-danger fw-medium fs-6">{userCountryError}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <lable className="mb-1 text-primary fw-medium" for="pincode">
              Picode
            </lable>
            <input
              type="number"
              placeholder="Enter Pincode"
              className="form-control"
              id="pincode"
              onChange={(event) => handleUserPincodeChange(event)}
            />
            <div className="mt-1">
              <p className="text-danger fw-medium fs-6">{userPincodeError}</p>
            </div>
          </div>

          <div className="mb-4">
            <button
              className="btn btn-primary fw-semibold"
              onClick={(event) => handlerConfrimAddress()}
            >
              Confirm Address
            </button>
          </div>
          <div className="text-danger fw-medium">
            {userBuildingNumber} - {userStreet} - {userCity} - {userState} -{" "}
            {userCountry} - {userPincode}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
