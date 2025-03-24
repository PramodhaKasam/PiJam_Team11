import React from "react";
import '../styles/home.css'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function Home()
{
    const navigate = useNavigate();
    const problemStatements = [
        "Problem Statement 1: Description here...",
        "Problem Statement 2: Description here...",
        "Problem Statement 3: Description here...",
        "Problem Statement 4: Description here...",
        "Problem Statement 5: Description here...",
        "Problem Statement 5: Description here..."
        ,"Problem Statement 5: Description here..."
        ,"Problem Statement 5: Description here..."
        ,"Problem Statement 5: Description here..."
      ];

    return(
        <>
            <Navbar />
            <div className="home-container">
                <div className="horizontal-box-container">
                    {problemStatements.map((ps, index) => (
                    <div className="info-box" key={index}>
                        <div className="box-title">PS</div>
                        <div className="box-content">{ps}</div>
                        <a onClick= {() => navigate('/inputs')} className="view-link">View Submissions</a>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;