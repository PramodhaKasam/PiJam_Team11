import React, { useState } from "react";
import AnalysisChart from "../components/analysischart";
import StackedBarChart from "../components/radarchart";
import Navbar from "../components/navbar";
import "../styles/leaderboard.css";
import { useNavigate } from "react-router-dom";

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [dialog, setDialog] = useState({ open: false, type: "" });

  const rubrics = [
    { parameter: "Understanding of Pollution Types", weightage: "20%" },
    { parameter: "Causes & Impact Analysis", weightage: "20%" },
    { parameter: "Proposed Solutions & Feasibility", weightage: "20%" },
    { parameter: "Presentation & Clarity", weightage: "20%" },
    { parameter: "Data & Research Support", weightage: "20%" },
  ];


  const submissions = 
  [ 
    { name: "Submission 1", parameters: {Clarity: 9, Presentation: 9, Research: 9, Originality: 10, Relevance: 10 }, },
    { name: "Submission 2", parameters: { Clarity: 9, Presentation: 8, Research: 10, Originality: 9, Relevance: 9 }, },
    { name: "Submission 3", parameters: { Clarity: 10, Presentation: 10, Research: 8, Originality: 7, Relevance: 8 }, }, 
  ];

  const submissionss = [
    { name: "Sustainable Striders", marks: 47 },
    { name: "Pollution Patrol", marks: 45 },
    { name: "Future Eco Leaders", marks: 43 },
    { name: "Green Guardians", marks: 42 },
    { name: "Nature Defenders", marks: 40 },
    { name: "Eco Warriors", marks: 38 },
    { name: "Clean Earth Crusaders", marks: 35 },
  ];

  const openDialog = (type) => {
    setDialog({ open: true, type });
  };

  const closeDialog = () => {
    setDialog({ open: false, type: "" });
  };

  return (
    <>
      <Navbar />
      <div className="leaderboard-page">
        <header className="header">
          <h1>Leaderboard</h1>
        </header>

        {/* Submissions Section */}
        <section className="leaderboard"> {submissionss.map((entry, index) => ( <div className="submission-card" key={index}> <div className="submission-info"> <h3 className="submission-name"><strong>{entry.name}</strong></h3> <p className="know-more" onClick={() =>navigate('/dashboard')}>view breakdown</p> </div> <div className="submission-actions"> <p className="marks">{entry.marks} Marks</p> </div> </div> ))} </section>

        {/* Show Rubrics and Analysis Buttons */}
        <div className="buttons-container">
          <button className="show-btn btn1" onClick={() => openDialog("rubrics")}>
            Show Rubrics
          </button>
          <button className="show-btn btn2" onClick={() => openDialog("analysis")}>
            Show Analysis
          </button>
        </div>

        {/* {dialog.open && dialog.type === "rubrics" && ( <ul> {rubrics.map((rubric, index) => ( <li key={index}> <strong>{rubric.parameter}:</strong> {rubric.weightage} </li> ))} </ul> )} */}

        {dialog.open && dialog.type === "rubrics" && (
          <div className="modal">
            <div className="modal-content">
              <h2>Rubrics</h2>
              <ul>
                {rubrics.map((rubric, index) => (
                  <li key={index}>
                    <strong>{rubric.parameter}:</strong> {rubric.weightage}
                  </li>
                ))}
              </ul>
              <button className="close-btn" onClick={closeDialog}>
                Close
              </button>
            </div>
          </div>
        )}
        {/* Dialog Modal */}
        {dialog.open && dialog.type === "analysis" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Analysis</h2>
            {/* Container for side-by-side graphs */}
            <div className="side-by-side-graphs">
              <div className="chart-container">
                <h3> Parameter-wise analysis</h3>
                <StackedBarChart submissions={submissions} /> {/* Ensure correct height */}
              </div>
              <div className="chart-container">
                <h3>Doughchart analysis</h3>
                <AnalysisChart submissions={submissionss} /> {/* Ensure correct height */}
              </div>
            </div>
            <button className="close-btn" onClick={closeDialog}>
              Close
            </button>
          </div>
        </div>
      )}

      </div>
    </>
  );
};

export default LeaderboardPage;
