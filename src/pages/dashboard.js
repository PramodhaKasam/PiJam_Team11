import React, { useState } from "react";
import '../styles/dashboard.css';
import Navbar from "../components/navbar";

const Dashboard = () => {
  const [selectedParameter, setSelectedParameter] = useState(null); // State to track the clicked parameter

  const [parameters, setParameters] = useState([
    {
      name: "Causes and sources",
      marksAwarded: 8,
      description: "Covered all major pollution types comprehensively.",
      highlights: "Explained sources and effects clearly.",
      lacks: "Lacked depth in discussing lesser-known pollutants.",
    },
    {
      name: "Impact on Environment",
      marksAwarded: 7,
      description: " Identified multiple causes with supporting data.",
      highlights: "Connected causes to long-term environmental effects.",
      lacks: "Impact analysis lacked regional examples.",
    },
    {
      name: "Mitigation Strategies",
      marksAwarded: 9,
      description: "Proposed innovative, practical solutions.",
      highlights: " Addressed both preventive and corrective measures.",
      lacks: "Solutions were strong but needed deeper feasibility analysis.",
    },
    {
      name: "Data & Research Usage",
      marksAwarded: 8,
      description: "Well-structured and logically organized content.",
      highlights: "Clear language and engaging writing style.",
      lacks: "Could improve on making technical terms more accessible.",
    },
    {
      name: "Presentation & Clarity",
      marksAwarded: 10,
      description: "Used credible sources and data to back claims.",
      highlights: "Provided statistics and graphical representation.",
      lacks: "Some references were outdated or lacked citation.",
    },
  ]);

  const handleParameterClick = (index) => {
    setSelectedParameter(index === selectedParameter ? null : index); // Toggle selection
  };

  const [submissionFeedback, setSubmissionFeedback] = useState({
    highlights: [
      "Strong understanding of different pollution types.",

"Well-researched impact analysis with supporting data.",

"Innovative and practical solutions proposed.",

"Clear and structured presentation with visuals.",

"Good use of references and research-backed arguments."
    ],
    lacks: [
      "Enhance feasibility analysis of proposed solutions.",

"Include real-world case studies for better application.",

"Improve data visualization for complex statistics.",

"Provide a comparative analysis of global policies.",

"Address potential challenges in implementation."
    ],
  });

  return (
    <div className="dashboard">
      <Navbar />
      <header className="dashboard-header">
        <div className="header-row">
          <h1>Green Guardians</h1>
          <p>Overall Marks: 
            <span className="marks">
              {parameters.reduce((sum, param) => sum + param.marksAwarded, 0)}
            </span>
          </p>
        </div>
      </header>

      <section className="summary">
        <p>
        The submission "Green Guardians" provides an in-depth analysis of pollution types, their causes, and their effects. It presents well-researched data and innovative solutions that focus on both short-term and long-term sustainability. The arguments are supported by credible sources, making it a well-structured and informative piece. The presentation is clear, with organized sections and engaging visuals. However, while the solutions are strong, a few areas require improvement, including feasibility analysis and more real-world case studies. Overall, the submission successfully highlights the urgency of environmental issues and provides practical steps to mitigate pollution effectively.
        </p>
      </section>

      <section className="parameters">
        <h2>Parameter Breakdown</h2>
        <div className="accordion">
          {parameters.map((param, index) => (
            <div className="accordion-item" key={index}>
              <button
                className="accordion-header"
                onClick={() => handleParameterClick(index)}
              >
                <span>{param.name}</span>
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
              </button>
              {selectedParameter === index && (
                <div className="accordion-body">
                  <p><strong></strong> {param.description}</p>
                  <p><strong></strong> {param.highlights}</p>
                  <p><strong></strong> {param.lacks}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="submission-feedback">
        <h2>Highlights</h2>
        <ul className="highlight-list">
          {submissionFeedback.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <h2>Areas of Improvement</h2>
        <ul className="improvement-list">
          {submissionFeedback.lacks.map((lack, index) => (
            <li key={index}>{lack}</li>
          ))}
        </ul>
      </section>

      <section className="submission-link">
        <a
          href="/path-to-original-submission"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Original Submission
        </a>
      </section>
    </div>
  );
};

export default Dashboard;
