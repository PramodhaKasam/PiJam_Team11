import React, { useState } from "react";
import "../styles/home.css";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Home() {
    const Navigate = useNavigate();
    const [showLeaderboard, setShowLeaderboard] = useState(false); // To toggle leaderboard modal
    const [selectedStudent, setSelectedStudent] = useState(null); // To show specific student details

    // Mock leaderboard data
    const leaderboard = [
        {
            name: "Student A",
            class: "10th Grade",
            competitions: {
                participated: 10,
                selected: 6,
                rejected: 3,
                onHold: 1
            },
        },
        {
            name: "Student B",
            class: "9th Grade",
            competitions: {
                participated: 8,
                selected: 4,
                rejected: 2,
                onHold: 2
            },
        },
        {
            name: "Student C",
            class: "11th Grade",
            competitions: {
                participated: 7,
                selected: 5,
                rejected: 1,
                onHold: 1
            },
        },
    ];

    // Sorting leaderboard based on "selected" hackathons
    const sortedLeaderboard = [...leaderboard].sort((a, b) => b.competitions.selected - a.competitions.selected);

    const handleStudentClick = (student) => {
        setSelectedStudent(student);
    };

    const closeStudentDetails = () => {
        setSelectedStudent(null);
    };

    return (
        <>
            <Navbar />
            <div className="home-container">
                {/* Button to view leaderboard */}
                <div className="leaderboard-button-container">
                    <button className="leaderboard-button" onClick={() => setShowLeaderboard(true)}>
                        View Student Leaderboard
                    </button>
                </div>

                {/* Problem Statement Boxes */}
                <div className="horizontal-box-container">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div className="info-box" key={index}>
                            <div className="box-title">Problem Statement {index + 1}</div>
                            <div className="box-content">
                                Description for Problem Statement {index + 1}...
                            </div>
                            <a className="start-evaluation-link" onClick={() => Navigate('/inputs')}>Start Evaluation</a>
                        </div>
                    ))}
                </div>

                {/* Leaderboard Modal */}
                {showLeaderboard && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Student Leaderboard</h2>
                            <ul className="leaderboard-list">
                                {sortedLeaderboard.map((student, index) => (
                                    <li key={index} className="leaderboard-item">
                                        <div>
                                            <strong>Name:</strong> {student.name}
                                        </div>
                                        <div>
                                            <strong>Class:</strong> {student.class}
                                        </div>
                                        <div>
                                            <strong>Competitions:</strong> {student.competitions.participated}
                                        </div>
                                        <button
                                            className="view-details-btn"
                                            onClick={() => handleStudentClick(student)}
                                        >
                                            View Details
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <button className="close-btn" onClick={() => setShowLeaderboard(false)}>Close</button>
                        </div>
                    </div>
                )}

                {/* Student Details Modal */}
                {selectedStudent && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Details for {selectedStudent.name}</h2>
                            <p><strong>Class:</strong> {selectedStudent.class}</p>
                            <p><strong>Total Competitions Participated:</strong> {selectedStudent.competitions.participated}</p>
                            <p><strong>Selected:</strong> {selectedStudent.competitions.selected}</p>
                            <p><strong>Rejected:</strong> {selectedStudent.competitions.rejected}</p>
                            <p><strong>On Hold:</strong> {selectedStudent.competitions.onHold}</p>
                            <button className="close-btn" onClick={closeStudentDetails}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
