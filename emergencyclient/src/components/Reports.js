// import React from "react";
// import NewReportForm from "./NewReportForm";
// import ReportList from "./ReportList";

// // const url = "http://localhost:9292/reports";

// const Reports = ({ report, onAddReport }) => {

//   // const handleDeleteClick = (id) => {
//   //   fetch(`http://localhost:9292/reports/${id}`, {
//   //     method: "DELETE",
//   //   });
//   // };

//   // const [isHide, setIsHide] = useState(false);
//   const reportdisplay = report.map((repo) => (
// <ReportList
// id={repo.id}
// repo={repo}
// />


//     // <tr key={repo.id}>
//     //   <td>{repo.created_at}</td>
//     //   <td>{repo.title}</td>
//     //   <td>{repo.description}</td>
//     //   <td>{repo.location}</td>
//     //   <td className="tbtn">
//     //     <button >
//     //       <span className="btn1">
//     //         <i class="fa fa-trash"></i>
//     //       </span>
//     //     </button>
//     //     <button>
//     //       <span className="btn2">
//     //         <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
//     //       </span>
//     //     </button>
//     //   </td>
//     // </tr>
//   ));
//   // console.log(params)

//   // function handleHideShow(){
//   // if(isHide){
//   //   setIsHide('')
//   // }
//   // else{
//   //   setIsHide(<NewReportForm params={params}/>)
//   // }}

//   return (
//     <div>
//       <div className="report-container">
//         <div className="reportdislay">
//           <h3>Reports display</h3>
//        {reportdisplay}
//         </div>
//         <div className="fomreport">
//           <div>
//             <h3>Report an emergency</h3>
//           </div>

//           <button className="hideshow">Show/hide new Report form</button>
//           {/* {true ? [isHide] : null} */}
//           <NewReportForm  onAddReport={onAddReport} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;
