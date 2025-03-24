import React, { useState } from "react";
import '../styles/dashboard.css';
import Navbar from "../components/navbar";

const Dashboard = () => {
  const [selectedParameter, setSelectedParameter] = useState(null); // State to track the clicked parameter

  const [parameters, setParameters] = useState([
    {
      name: "Parameter 1",
      marksAwarded: 8,
      description: "This parameter explains clarity in execution.",
      highlights: "Good organization and detail.",
      lacks: "Could improve documentation.",
    },
    {
      name: "Parameter 2",
      marksAwarded: 6,
      description: "This parameter measures presentation skills.",
      highlights: "Effective use of visuals.",
      lacks: "Needs more audience engagement.",
    },
  ]);

  const handleParameterClick = (index) => {
    setSelectedParameter(index === selectedParameter ? null : index); // Toggle selection
  };

  const [submissionFeedback, setSubmissionFeedback] = useState({
    highlights: "The submission demonstrates exceptional clarity, innovative approaches, and precise execution across key areas.",
    lacks: "The submission could benefit from more in-depth research and a comprehensive exploration of certain topics.",
  });

  return (
    <div className="dashboard">
     <Navbar />
      <header className="dashboard-header">
        <h1>Submission Name</h1>
        <p>Overall Marks: 
          <input 
            type="number" 
            value={parameters.reduce((sum, param) => sum + param.marksAwarded, 0)} 
            readOnly 
          />
        </p>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          This is a short summary of the submission in less than 100 words.
          It covers the key points and overall approach taken by the submitter.
        </p>
      </section>

      <section className="parameters">
        <h2>Parameter-wise Breakdown</h2>
        <table className="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Marks Awarded</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param, index) => (
              <tr key={index}>
                <td>{param.name}</td>
                <td>
                  <input
                    type="number"
                    value={param.marksAwarded}
                    onChange={(e) => {
                      const newMarks = Number(e.target.value);
                      const updatedParameters = [...parameters];
                      updatedParameters[index].marksAwarded = newMarks;
                      setParameters(updatedParameters);
                    }}
                  />
                </td>
                <td>
                  <button onClick={() => handleParameterClick(index)}>
                    {selectedParameter === index ? "Hide Details" : "Show Details"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedParameter !== null && (
          <div className="parameter-details">
            <h3>{parameters[selectedParameter].name} Details</h3>
            <p><strong>Description:</strong> {parameters[selectedParameter].description}</p>
            <p><strong>Highlights:</strong> {parameters[selectedParameter].highlights}</p>
            <p><strong>What It Lacks:</strong> {parameters[selectedParameter].lacks}</p>
          </div>
        )}
      </section>

      <section className="submission-feedback">
        <h2>Overall Feedback</h2>
        <p><strong>Highlights:</strong> {submissionFeedback.highlights}</p>
        <p><strong>What It Lacks:</strong> {submissionFeedback.lacks}</p>
      </section>

      <section className="submission-link">
        <a href="/path-to-original-submission" target="_blank" rel="noopener noreferrer">
          View Original Submission
        </a>
      </section>
    </div>
  );
};

export default Dashboard;
