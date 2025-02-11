import Home from "./Home";
import Login from "./Login";
import Resetpassword from "./Resetpassword";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
