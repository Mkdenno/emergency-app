import React, { useState } from "react";
const ReportList = ({ id, repo, onReportDelete }) => {

  const handleEditClick = () => {
    
    
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/deletereports/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });

    onReportDelete(id);
  };

  return (
    <>
      <tr>
        <td>{repo.created_at.slice(0, 19)}</td>
        <td>{repo.title}</td>
        <td>{repo.description}</td>
        <td>{repo.location}</td>
        <td className="tbtn">
          <button onClick={handleDeleteClick}>
            <span className="btn1">
              <i class="fa fa-trash"></i>
            </span>
          </button>
          <button onClick={handleEditClick}>
            <span className="btn2">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReportList;
