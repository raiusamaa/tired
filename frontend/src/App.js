import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate, BrowserRouter, HashRouter } from 'react-router-dom';
import Signupform from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Home from './pages/home/home';
import Profile from "./pages/Profile/Profile"
import CommunitiesSignup from "./pages/Communities/CommunitiesSignup"
import Signup from './pages/Signup';
import Events from "./pages/Events/Events"

function App() {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Routes>  
              <Route path="/" element={<Signupform/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/Profile" element={<Profile/>} />
              <Route path="/CommunitiesSignup" element={<CommunitiesSignup/>} />
              <Route path="/VeteranSignup" element={<Signupform/>} />
              <Route path="/Events" element={<Events/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  )}

export default App
 