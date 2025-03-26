import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Register() {
    let navigate = useNavigate();
    return (
        <>
            {/* <Navbar /> */}
            <div className="login-page">
                {/* Left Side */}
                <div className="welcome-section">
                    <h1>Welcome to Login</h1>
                    <p>Don't have an account?</p>
                    <button onClick={() => navigate('/signup')}>Sign Up</button>
                </div>

                {/* Right Side */}
                <div className="login-section">
                    <form className="login-form">
                        <h2>Login</h2>
                        <div className="input-group">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="login-btn" onClick={() => navigate('/home')}>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
