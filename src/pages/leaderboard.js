import React, { useState } from "react";
import { Chart } from "react-google-charts";
import StackedBarChart from "../components/radarchart";
import "../styles/leaderboard.css";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const LeaderboardPage = () => {
  const [showRubric, setShowRubric] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const navigate = useNavigate();

  const rubrics = [
    { parameter: "Clarity", weightage: "30%" },
    { parameter: "Presentation", weightage: "25%" },
    { parameter: "Research", weightage: "20%" },
    { parameter: "Originality", weightage: "15%" },
    { parameter: "Relevance", weightage: "10%" },
  ];
  const leaderboardData = [
    { name: "Submission 1", marks: 10 },
    { name: "Submission 2", marks: 9.5 },
    { name: "Submission 3", marks: 8 },
    { name: "Submission 4", marks: 7 },
  ];

  const submissions = [
    {
      name: "Submission 1",
      parameters: {
        Clarity: 8,
        Presentation: 7,
        Research: 6,
        Originality: 9,
        Relevance: 5,
      },
    },
    {
      name: "Submission 2",
      parameters: {
        Clarity: 9,
        Presentation: 6,
        Research: 8,
        Originality: 8,
        Relevance: 6,
      },
    },
    {
      name: "Submission 3",
      parameters: {
        Clarity: 7,
        Presentation: 5,
        Research: 6,
        Originality: 7,
        Relevance: 4,
      },
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="leaderboard-page">
         <div className="button-container">
          <button onClick={() => setShowRubric(true)}>Show Rubrics</button>
          <button onClick={() => setShowAnalysis(true)}>Show Analysis</button>
        </div>
      <header className="header">
        <h1>Leaderboard</h1>
      </header>

      <section className="leaderboard">
        {leaderboardData.map((entry, index) => (
          <div className="submission-box" key={index} onClick={() => navigate('/dashboard')}>
            <h3>{entry.name}</h3>
            <p>Marks: {entry.marks}</p>
          </div>
        ))}
      </section>

      {showRubric && (
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
            <button className="close-btn" onClick={() => setShowRubric(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {showAnalysis && (
        <div className="modal">
          <div className="modal-content">
            <h2>Parameter-Wise Analysis</h2>
            <StackedBarChart submissions={submissions} />
            <button className="close-btn" onClick={() => setShowAnalysis(false)}>Close</button>
          </div>
        </div>
      )}
   
    </div>
    </>
  );
};

export default LeaderboardPage;
