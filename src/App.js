import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Register from './pages/register';
import Signup from './pages/signup';
import Home from "./pages/home";
import Inputs from "./pages/inputs";
import Leaderboard from "./pages/leaderboard";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inputs" element= {<Inputs />} />
          <Route path="/leaderboard" element= {<Leaderboard />} />
          <Route path="/dashboard" element= {<Dashboard />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
