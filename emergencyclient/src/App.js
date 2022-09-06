import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
const url="http://localhost:9292/reports"
function App() {
  // const [isDarkMode,setIsDarkMode]=useState(false)
  const [report, setReport] = useState([]);
  // this will be used for the Dark Mode Toggle feature
  // function handleButton(){
  //   setIsDarkMode((isDarkMode)=> !isDarkMode)

  // }
  // const appClass = isDarkMode ? "App dark" : "App light"

  // fetching


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);
  const onAddReport=(addNewReport) =>{
    setReport([addNewReport, ...report]);
  }

  return (
    <div>
      {/* <button onClick={handleButton}>{isDarkMode ? "App dark" : "App light"} Mode</button> */}
      <Routes>
        <Route path="/:id/:username/:role" element={<Home report={report} onAddReport={onAddReport}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
