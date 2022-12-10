import React, { useState } from 'react'
import "./editProfile.css"
import Axios from 'axios'
import {useNavigate } from 'react-router-dom';
import { Navigate, redirect } from 'react-router';
export default function EditProfile() {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [relationship, setRelationship] = useState('');
  const [hobbies, setHobby] = useState('');
  const [profession, setProff] = useState('');

     const submitHandler = async (e) =>
     {
      e.preventDefault();
      try
      {
        const { data } = await Axios.put('http://localhost:5000/api/auth/editHobby',
        {
          name,
          city,
          relationship,
          hobbies,
          profession
        });
        localStorage.setItem("user",JSON.stringify(data));
      }
      catch(err)
  {
    console.log(err)
   alert("Something Went Wrong!")
  }
    }
  return (
    <div className='Profile'>
        <div className="profileWrapper">
            <h1 className="title">Profile</h1>
            <div className='UpdateForm'>
            <label htmlFor='name'>Name</label>
            <br></br>
            <label htmlFor='profession'>Profession</label>
            <br></br>
            <label htmlFor='relationship'>Relationship</label>
            <br></br>
            <h2> Edit Hobbies</h2>
            <br></br>
            <label htmlFor='hobbies'>Hobbies</label>
            <input type="hobbies" id="hobbies"/>
              <br></br>
            <button 
            className="saveChanges">Save Changes</button>
            </div>
        </div>
    </div>
  )}
