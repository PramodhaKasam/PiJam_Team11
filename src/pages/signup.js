import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
    let navigate = useNavigate();
    return (
        <>
            {/* <Navbar /> */}
            <div className="signup-page">
                {/* Left Side */}
                <div className="welcome-section">
                    <h1>Already have an account?</h1>
                    <p>Go ahead and sign in.</p>
                    <button onClick={() => navigate('/')}>Login</button>
                </div>

                {/* Right Side */}
                <div className="signup-section">
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
                        <button type="submit" className="signup-btn" onClick={() => navigate('/home')}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
