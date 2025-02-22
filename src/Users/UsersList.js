import axios from "axios";
import { useEffect, useState } from "react";

function UsersList() {
  let [userData, setUserData] = useState([]);
  let [userInput,setUseInput] = useState([]); 

  useEffect(() => {
    async function callUserData() {
      let apiUserResponse = await axios.get("https://dummyjson.com/users");
      console.log(apiUserResponse.data.users);
      setUserData([...apiUserResponse.data.users]);
      setUseInput([...apiUserResponse.data.users]);
    }
    callUserData();
  }, []);


  function changeTextInput(event){
    let userText = event.target.value;
    console.log(userText);
    let filteredList = userInput.filter(user => user.firstName.toLowerCase().includes(userText.toLowerCase()));
    setUserData([...filteredList]);

  }


  function sortHandler(){
    let sortData = userData.sort((user1,user2 ) => {
        if (user1.firstName > user2.firstName){
            return -1
        }else{
            return 1
        }
    })

    setUserData([...sortData])

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
            <input type="search" placeholder="Please Search..." className="form-control mt-5" onChange={event => changeTextInput(event)}/>
        </div>
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User Id</th>
                <th onClick={event => sortHandler()}>Name</th>
                <th>Email Id</th>
                <th>Gender</th>
                <th>Age</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
