import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { Navigate, redirect } from 'react-router';
import socialmedia from '../smo.png';
import {useNavigate } from 'react-router-dom';

const Signup = () => 
{
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [profession, setProff] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [relationship, setRelationship] = useState('');
  const [hobby, setHobby] = useState('');

  const navigate=useNavigate()

 const submitHandler = async (e) =>
{
  e.preventDefault();
  try {
   //console.log(email,password)

    const { data } = await Axios.post('http://localhost:5000/api/auth/register',
    {
      email,
      password,
      profession,
      name,
      city,
      relationship,
      hobby
    });

    if(data.message === 'Invalid Credentials') {
      alert("Invalid Credentials!")
      return
    }
    // localStorage.setItem("user",JSON.stringify(data));
    navigate('/Login');
  }
  catch(err)
  {
    console.log(err)
   alert("Something Went Wrong!")
  }

}
  return (
    <div className="SignupForm">
        <img src={socialmedia} id="signupheader" alt="SocialMedia Header" />
        <h1 id="VeteranMax">VeteranMax</h1>
        <div className="form">
        <div className="slide-controls">
           
          <input onClick={() => navigate('/CommunitiesSignup')} type="radio" name="slide" id="login"  />
          <input  onClick={() => navigate('/VeteranSignup')}  type="radio" name="slide" id="signup" checked/>
          <label for="login" class="slide login">Communities</label>
          <label for="signup" class="slide signup">Veteran</label>
          <div class="slider-tab">

          </div>
        </div>
          <h2 className='signupTitle'>SIGNUP </h2>
          <label htmlFor="name" id="Name">
            Name
          </label>
          <input value={name} type="name" id="name" 
          onChange={(e) => 
            setName(e.target.value)}
          />
          <label htmlFor="Profession" id="Profession">
            Profession
          </label>
          <input value={profession} type="profession" id="profession"
          onChange={(e) => 
            setProff(e.target.value)}
          />
          <label htmlFor="email" id="Email">
            Email
          </label>
          <input value={email} type="email" id="email" 
          onChange={(e) => 
            setEmail(e.target.value)}
          />
          <label htmlFor="password" id="Password">
            Password
          </label>
          <input value={password} type="password" id="password" 
          onChange={(e) => 
            setPass(e.target.value)}
          />
          <label htmlFor="city" id="City">
            City
          </label>
          <input value={city} type="city" id="city" 
          onChange={(e) => 
            setCity(e.target.value)}
          />
          <label htmlFor="relationship" id="Relation">
            Relationship
          </label>
          <input value={relationship} type="relationship" id="relationship" 
          onChange={(e) => 
            setRelationship(e.target.value)}
          />

           <label htmlFor="hobby" id="Hobby">
           Hobbies
          </label>
          <input value={hobby} type="hobby" id="hobby" 
          onChange={(e) => 
            setHobby(e.target.value)}
          />

          <button onClick={submitHandler} id='SignupButton'>Signup</button>
         
          <button onClick={() => navigate('/Login')} id="logininstead">Login instead?</button>
        </div>
        </div>
  );
};

export default Signup;
