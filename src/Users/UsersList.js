import axios from "axios";
import { useEffect, useState } from "react";

function UsersList() {
  let [userData, setUserData] = useState([]);
  let [userInput, setUseInput] = useState([]);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [age, setAge] = useState("");

  useEffect(() => {
    async function callUserData() {
      let apiUserResponse = await axios.get("https://dummyjson.com/users");
      // console.log(apiUserResponse.data.users);
      setUserData([...apiUserResponse.data.users]);
      setUseInput([...apiUserResponse.data.users]);
    }
    callUserData();
  }, []);

  function changeTextInput(event) {
    let userText = event.target.value;
    console.log(userText);
    let filteredList = userInput.filter((user) =>
      user.firstName.toLowerCase().includes(userText.toLowerCase())
    );
    setUserData([...filteredList]);
  }

  function sortHandler() {
    let sortData = userData.sort((user1, user2) => {
      if (user1.firstName > user2.firstName) {
        return -1;
      } else {
        return 1;
      }
    });

    setUserData([...sortData]);
  }

  function changeHandlerDetails(userDetails) {
    // console.log(userDetails);
    setName(userDetails.firstName);
    setEmail(userDetails.email);
    setGender(userDetails.gender);
    setAge(userDetails.age);
  }

  async function deleteHandler(deleteUser) {
    // console.log(deleteUser);
    // let deleteApiResponse = await axios.delete("https://dummyjson.com/users/" + deleteUser.id);
    let filterDeleteData = userData.filter(user => user.id !== deleteUser.id);
    // console.log(filterDeleteData);
    setUserData([...filterDeleteData]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <input
            type="search"
            placeholder="Please Search..."
            className="form-control mt-5"
            onChange={(event) => changeTextInput(event)}
          />
        </div>
        <div className="col-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User Id</th>
                <th onClick={(event) => sortHandler()}>Name</th>
                <th>Email Id</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="btn btn-primary me-4"
                      onClick={(event) => changeHandlerDetails(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => deleteHandler(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <div className="top-0 position-sticky">
            <h2 className="mb-4 text-primary">Update Details</h2>
            <form>
              <div className="mb-2">
                <label
                  htmlFor="userName"
                  className="text-primary fw-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control "
                  id="userName"
                  value={name}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="text-primary fw-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter mail"
                  className="form-control"
                  id="email"
                  value={email}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="gnder"
                  className="text-primary fw-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Gender"
                  className="form-control"
                  id="gender"
                  value={gender}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="age" className="text-primary fw-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Age"
                  className="form-control"
                  id="age"
                  value={age}
                />
              </div>
              <div className="text-end">
                <button className="btn btn-warning fw-semibold mt-2">
                  Upate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
