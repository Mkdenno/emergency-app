import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Reports from "./Reports";

const Home = ({report,onAddReport}) => {

  // let [visible, setButtonVisibility] = useState("");

  let params = useParams();


  return (
    <div >

    <NavBar  />
     <div className="home-container">
     <div className="userdetails">
        <h1>Welcome {params.username}!!</h1>
      </div>
      <div className="reportscontainer">
      <Reports report={report} params={params} onAddReport={onAddReport}/>
      </div>
     </div>
    </div>
  );
};

export default Home;
