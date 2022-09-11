import React from "react";
const Url ="https://emergencybackend.herokuapp.com"


const ReportList = ({ id, repo, onReportDelete,params }) => {
// console.log(repo)

  const handleEditClick = () => {
    
    
  };

  const handleDeleteClick = () => {
    fetch(`${Url}/deletereports/${id}`, {
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
        <td>{repo.created_at}</td>
        <td>{repo.title}</td>
        <td>{repo.description}</td>
        <td>{repo.location}</td>
        <td className="tbtn">
          <button onClick={handleDeleteClick}>
            <span className="btn1">
              <i className="fa fa-trash"></i>
            </span>
          </button>
          {
           params.role === 'user'?
            <button onClick={handleEditClick}>
            <span className="btn2">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </span>
          </button>
          : 
          <button onClick={handleEditClick}>Check
        </button>
          }

        </td>
      </tr>
    </>
  );
};

export default ReportList;
