import React from "react";
import Navbar from "../components/navbar";
import '../styles/inputs.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inputs()
{
    const navigate = useNavigate();
    const [table1Rows, setTable1Rows] = useState([
    { parameter: "", weightage: "" },
    ]);

    const [table2Rows, setTable2Rows] = useState([
    { parameter: "", low: "", mid: "", high: "" },
    ]);

    
    const addTable1Row = () => {
    setTable1Rows([...table1Rows, { parameter: "", weightage: "" }]);
    };

    const deleteTable1Row = () => {
    if (table1Rows.length > 1) {
        setTable1Rows(table1Rows.slice(0, -1));
    }
    };

   
    const addTable2Row = () => {
    setTable2Rows([...table2Rows, { parameter: "", low: "", mid: "", high: "" }]);
    };

    const deleteTable2Row = () => {
    if (table2Rows.length > 1) {
        setTable2Rows(table2Rows.slice(0, -1));
    }
    };
    return(
        <>
            <Navbar/>
            <div className="app">
      <header className="header">
        <h1>Project PS Name</h1>
        <p>A short description of the project goes here.</p>
      </header>

      <section className="table-section">
        <h2>Weightage of Each Parameter</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Weightage</th>
            </tr>
          </thead>
          <tbody>
            {table1Rows.map((row, index) => (
              <tr key={index}>
                <td><input type="text" value={row.parameter} placeholder="Parameter" /></td>
                <td><input type="text" value={row.weightage} placeholder="Weightage" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="action-btn" onClick={addTable1Row}>Add Row</button>
        <button className="action-btn" onClick={deleteTable1Row}>Delete Row</button>

        <h2>Parameter-wise Assessment</h2>
        <table className="styled-table assessment-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th className="low">Low (0-0.5pt)</th>
              <th className="mid">Mid (1pt)</th>
              <th className="high">High (2pts)</th>
            </tr>
          </thead>
          <tbody>
            {table2Rows.map((row, index) => (
              <tr key={index}>
                <td><input type="text" value={row.parameter} placeholder="Parameter" /></td>
                <td><input type="text" value={row.low} placeholder="Marks" /></td>
                <td><input type="text" value={row.mid} placeholder="Marks" /></td>
                <td><input type="text" value={row.high} placeholder="Marks" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="action-btn" onClick={addTable2Row}>Add Row</button>
        <button className="action-btn" onClick={deleteTable2Row}>Delete Row</button>
        <button className="submit-btn" onClick={() => {navigate('/leaderboard')}}>Submit</button>
      </section>
    </div>
        </>
    )
}

export default Inputs;