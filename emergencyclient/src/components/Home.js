import React, {useState} from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Landing from "./Landing";

const Home = () => {

  let [visible, setButtonVisibility] = useState("");

  let params = useParams();


  if(params.role === 'admin') {

    setButtonVisibility = "hidden"
    
  }
  else {
    setButtonVisibility = "visible"
  }

  console.log(visible)

  return (
    <div>
    <NavBar />
    <Landing />

      <div className="homecontainer">
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
      <h1>Home pageeeee</h1>
        <p>{params.id}</p>
        {/* <p>{params.username}</p> */}
        <p>{params.role}</p>
      </div>
      <h1>Welcome {params.username}!!</h1>

      <div className="post_report">
        <button style={ { display: "none"} } >PostReport</button>
      </div>
      <div className="view_report">
        <button  style={ { visibility: visible} } >ViewReport</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
