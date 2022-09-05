import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register"
import Login from "./components/Login"
import Reports from "./components/Reports";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
function App() {



  return (
    <div className="App">
        {/* <NavBar/>
        <Landing/> */}
      <Routes>
      <Route path="/:id/:username/:role" element={<Home />}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>
      </Routes>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
