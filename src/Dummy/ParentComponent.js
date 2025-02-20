import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import axios from "axios";

function ParentComponent() {
  let [userTitles, setUserTitles] = useState([]);
  let [showPostData, setShowPostData] = useState("") 

  useEffect(() => {
    async function apiCallingData() {
      let responseDataFromApi = await axios.get("https://dummyjson.com/posts");
      setUserTitles(responseDataFromApi.data.posts);
    //   console.log(responseDataFromApi.data.posts);
    }
    apiCallingData();
  }, []);

  function getPostData(titleInfo){
    // console.log(titleInfo);
    setShowPostData(titleInfo);

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{showPostData}</h1>
        </div>

        {userTitles.map((title) => (
          <ChildComponent title={title} getPost = {getPostData}  />
        ))}
       
      </div>
    </div>
  );
}

export default ParentComponent;
