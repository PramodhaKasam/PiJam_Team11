import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'
import Navbar from "../components/navbar";

function Register()
{
    let navigate = useNavigate();
    return(
        <>
           <Navbar />
            <div className="login-container">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" onClick={() => navigate('/home')}>Login</button>
                    <p>
                        Don't have an account? <a onClick={() => navigate('/signup')}>Sign Up</a>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register
