import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import "../styles/inputs.css";

function Inputs() {
    const navigate = useNavigate();
    const [tableRows, setTableRows] = useState([
        { criteria: "", weightage: "", low: "", mid: "", high: "" },
    ]);

    const addRow = () => {
        setTableRows([...tableRows, { criteria: "", weightage: "", low: "", mid: "", high: "" }]);
    };

    const deleteRow = (index) => {
        const updatedRows = [...tableRows];
        updatedRows.splice(index, 1); // Deletes row at specified index
        setTableRows(updatedRows);
    };

    return (
        <>
            <Navbar />
            <div className="app">
                <header className="header">
                    <h1>Open Source Odyssey</h1>
                    <p>
                      A hackathon dedicated to contributing to open-source projects, improving existing tools, and developing new libraries.
                    </p>
                </header>

                {/* Rubric Title Section */}

                <section className="table-section">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Weightage</th>
                                <th className="low">Low (0.5pt)</th>
                                <th className="mid">Mid (1pt)</th>
                                <th className="high">High (2pts)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((row, index) => (
                                <tr key={index}>
                                    <td><input type="text" placeholder="Criteria" /></td>
                                    <td><input type="text" placeholder="Weightage" /></td>
                                    <td><input type="text" placeholder="Low" /></td>
                                    <td><input type="text" placeholder="Mid" /></td>
                                    <td><input type="text" placeholder="High" /></td>
                                    <td>
                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => deleteRow(index)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <section className="ending">
                      <button className="action-btn add-row-btn" onClick={addRow}>Add Row</button>
                      <button
                          className="submit-btn"
                          onClick={() => {
                              navigate('/leaderboard');
                          }}
                      >
                          Submit
                      </button>
                    </section>
                    
                </section>
            </div>
        </>
    );
}

export default Inputs;
