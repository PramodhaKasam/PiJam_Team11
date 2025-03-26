import React, { useState } from "react";
import AnalysisChart from "../components/analysischart";
import StackedBarChart from "../components/radarchart";
import Navbar from "../components/navbar";
import "../styles/leaderboard.css";
import { useNavigate } from "react-router-dom";

const LeaderboardPage = () => {
  const [dialog, setDialog] = useState({ open: false, type: "" });
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();
  const rubrics = [
    { parameter: "Clarity", weightage: "30%" },
    { parameter: "Presentation", weightage: "25%" },
    { parameter: "Research", weightage: "20%" },
    { parameter: "Originality", weightage: "15%" },
    { parameter: "Relevance", weightage: "10%" },
  ];

  const leaderboardData = [
    { name: "Submission 1", marks: 95 },
    { name: "Submission 2", marks: 88 },
    { name: "Submission 3", marks: 76 },
  ];

  const submissions = [
    {
      name: "Submission 1",
      parameters: { Clarity: 8, Presentation: 7, Research: 6, Originality: 9, Relevance: 5 },
    },
    {
      name: "Submission 2",
      parameters: { Clarity: 9, Presentation: 6, Research: 8, Originality: 8, Relevance: 6 },
    },
    {
      name: "Submission 3",
      parameters: { Clarity: 7, Presentation: 5, Research: 6, Originality: 7, Relevance: 4 },
    },
  ];

  const submissionss = [
    { name: "Submission 1", marks: 35 },
    { name: "Submission 2", marks: 40 },
    { name: "Submission 3", marks: 60 },
    { name: "Submission 4", marks: 85 },
    { name: "Submission 5", marks: 72 },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const openDialog = (type) => {
    setDialog({ open: true, type });
    setDropdownVisible(false); // Close dropdown after opening modal
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
        <section className="leaderboard">
          {leaderboardData.map((entry, index) => (
            <div className="submission-card" key={index}>
              <div className="submission-info">
                <h3 className="submission-name"><strong>{entry.name}</strong></h3>
                <p className="know-more" onClick={() =>navigate('/dashboard')}>view dashboard</p>
              </div>
              <div className="submission-actions">
                <p className="marks">{entry.marks} Marks</p>
              </div>
            </div>
          ))}
        </section>

        {/* Options Button - Fixed */}
        <div className="fixed-options">
          <button className="options-btn" onClick={toggleDropdown}>
            More
          </button>
          {dropdownVisible && (
            <div className="dropdown">
              <button onClick={() => openDialog("rubrics")}>Show Rubrics</button>
              <button onClick={() => openDialog("analysis1")}>Show Analysis1</button>
              <button onClick={() => openDialog("analysis2")}>Show Analysis2</button>
              <button className="close-btn" onClick={() => setDropdownVisible(false)}>Close</button>
            </div>
          )}
        </div>

        {/* Dialog Modal */}
        {dialog.open && (
          <div className="modal">
            <div className="modal-content">
              <h2>
                {dialog.type === "rubrics"
                  ? "Rubrics"
                  : dialog.type === "analysis1"
                  ? "Parameter-Wise Analysis"
                  : "Submission Categories"}
              </h2>
              <div>
                {dialog.type === "rubrics" && (
                  <ul>
                    {rubrics.map((rubric, index) => (
                      <li key={index}>
                        <strong>{rubric.parameter}:</strong> {rubric.weightage}
                      </li>
                    ))}
                  </ul>
                )}
                {dialog.type === "analysis1" && (
                  <StackedBarChart submissions={submissions} />
                )}
                {dialog.type === "analysis2" && (
                  <AnalysisChart submissions={submissionss} />
                )}
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
