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

