import React, { useState } from "react";

const NewReportForm = ({ params,onAddReport }) => {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    location: "",
    user_id: ""

  });
  // console.log(params.id)

  return (
    <div>
      <form onSubmit={handleSubmit} className="formR">
        <input
          type="text"
          name="title"
          placeholder="Enter Type of emergency report"
          onChange={handleInputChange}
          value={inputData.title}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Enter Description of emergency report"
          onChange={handleInputDescription}
          value={inputData.description}
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter Location of emergency report"
          onChange={handleInputLocation}
          value={inputData.location}
        />
        <br />
        <button type="submit" className="report-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewReportForm;
