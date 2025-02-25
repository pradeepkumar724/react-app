import Home from "./Home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Resetpassword from "./Auth/Resetpassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./Address";
import HomeOne from "./HomeOne";
import ProductsList from "./ProductsList";
import ParentComponent from "./Dummy/ParentComponent";
import UsersList from "./Users/UsersList";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" Component={Signup} />
            <Route path="/login" Component={Login} />
            <Route path="/resetpassword" Component={Resetpassword} />
            <Route path="/" Component={Home} />
            <Route path="/user-address" Component={Address}/>
            <Route path="/home" Component={HomeOne}/>
            <Route path="/products-list" Component={ProductsList}/>
            <Route path="/dummy-post" Component={ParentComponent}/>
            <Route path="/manage-users" Component={UsersList}/>
          </Routes>
        </BrowserRouter>
        </Provider>
      </header>
    </div>
  );
}

export default App;
