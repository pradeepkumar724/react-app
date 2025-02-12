import Home from "./Home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Resetpassword from "./Auth/Resetpassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./Address";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" Component={Signup} />
            <Route path="/login" Component={Login} />
            <Route path="/resetpassword" Component={Resetpassword} />
            <Route path="/" Component={Home} />
            <Route path="/user-address" Component={Address}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
