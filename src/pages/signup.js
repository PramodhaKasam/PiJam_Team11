import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import '../styles/signup.css'

function Signup() {
    let navigate = useNavigate();
  return (
    <>
        <Navbar />
        <div className="signup-container">
            <form className="signup-form">
                <h2>Sign Up</h2>
                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" />
                </div>
                <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" />
                </div>
                <button type="submit" onClick={() =>navigate('/')}>Sign Up</button>
                <p>
                    Already have an account? <a onClick={() => navigate('/')}>Login</a>
                </p>
            </form>
        </div>
    </>
  );
}

export default Signup;
