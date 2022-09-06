import React from "react";
import NewReportForm from "./NewReportForm";

const Reports = ({ report, params, onAddReport }) => {
  // const [isHide, setIsHide] = useState(false);
  const reportdisplay = report.map((repo) => (
    <tr>
    <td>{repo.created_at}</td>
    <td>{repo.title}</td>
    <td>{repo.description}</td>
    <td>{repo.location}</td>
    <td className="tbtn">
    <span className="btn1"><i class="fa fa-trash"></i></span><br/>
    <span className="btn2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span></td>
  </tr>
  ));
  // console.log(params)

  // function handleHideShow(){
  // if(isHide){
  //   setIsHide('')
  // }
  // else{
  //   setIsHide(<NewReportForm params={params}/>)
  // }}

  return (
    <div>
      <div className="report-container">
        <div className="reportdislay">
          <h3>Reports display</h3>
          <table>
            <tr>
              <th>Date&Time</th>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
            {reportdisplay}
          </table>
        </div>
        <div className="fomreport">
          <div>
            <h3>Report an emergency</h3>
          </div>

          <button className="hideshow">Show/hide new Report form</button>
          {/* {true ? [isHide] : null} */}
          <NewReportForm params={params} onAddReport={onAddReport} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
