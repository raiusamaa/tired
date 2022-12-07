import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Navigate, redirect } from 'react-router';
import './communitiessignup.css';
import socialmedia from '../../smo.png';
import { useNavigate, Link } from 'react-router-dom';

const CommunitiesSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [profession, setProff] = useState('');
  const [name, setName] = useState('');
  const [typeofprofile, settypeofprofile] = useState('');

  const navigate = useNavigate();
  //hellocvhanged
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = Axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
        profession,
        name,
        typeofprofile,
      });

      localStorage.setItem('user', JSON.stringify(data));

      navigate('/CommunitiesSignup');
      navigate('/VeteranSignup');
    } catch (err) {
      console.log(err);
      alert('Something Went Wrong!');
    }
  };

  return (
    <div className="SignupForm">
      <img src={socialmedia} id="signupheader" alt="SocialMedia Header" />
      <h1 id="Communities">Communities</h1>
      <div className="form">
        <div className="slide-controls">
          <input
            onClick={() => navigate('/CommunitiesSignup')}
            type="radio"
            name="slide"
            id="login"
            checked
          />
          <input
            onClick={() => navigate('/VeteranSignup')}
            type="radio"
            name="slide"
            id="signup"
          />
          <label for="login" class="slide login">
            Communities
          </label>
          <label for="signup" class="slide signup">
            Veteran
          </label>
          <div class="slider-tab"></div>
        </div>

        <h2> SIGN UP</h2>
        <label htmlFor="name" id="Name">
          Name
        </label>
        <input
          value={name}
          type="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="Profession" id="Profession">
          Profession
        </label>
        <input
          value={profession}
          type="profession"
          id="profession"
          onChange={(e) => setProff(e.target.value)}
        />

        <label htmlFor="email" id="Email">
          Email
        </label>
        <input
          value={email}
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" id="Password">
          Password
        </label>
        <input
          value={password}
          type="password"
          id="password"
          onChange={(e) => setPass(e.target.value)}
        />

        <div className="dropdown">
          {/* <label htmlFor="type" id="type">
          Type Of Profile
          </label> */}
          <button className="dropdownButton">Type Of Profile</button>
          <div class="dropdown-content">
            <Link to="#">Organization</Link>
            <Link to="#">NGO</Link>
            <Link to="#">Educational Institue</Link>
            {/* <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>

        <button onClick={() => navigate('/Login')} id="SignupButton">
          Signup
        </button>

        <button onClick={() => navigate('/Login')} id="logininstead">
          Login instead?
        </button>
      </div>
    </div>
  );
};

export default CommunitiesSignup;
