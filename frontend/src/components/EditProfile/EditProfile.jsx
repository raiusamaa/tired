import React, { useState } from 'react'
import "./editProfile.css"
import Axios from 'axios'
import {useNavigate } from 'react-router-dom';
export default function EditProfile() {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [hobbies, setHobby] = useState('');
  const [profession, setProff] = useState('');
  let email=sessionStorage.getItem("email")
     const submitHandler = async (e) =>
     {
      e.preventDefault();
      console.log(name)
      try
      {
        const { data } = await Axios.patch('http://localhost:5000/api/auth/updateHobby',
        {
          email,
          name,
          relationship,
          hobbies,
          profession
        });
       console.log(data);
      }
      catch(err)
  {
    console.log(err)
   alert("Something Went Wrong!")
  }
  // navigate('/Home')
  }
  return (
    <div className='Profile'>
        <div className="profileWrapper">
            <h1 className="title">Profile</h1>
            <div className='UpdateForm'>
            <h2  id='editHobbies'> Edit Your Profile</h2>
            <label  id='labelName'  htmlFor='name'>Name</label>
            <input type="hobbies" id="nam"    onChange={(e) => 
            setName(e.target.value)}/>
            <br></br>
            <label  id='labelProf'  htmlFor='profession'>Profession</label>
            <input type="hobbies" id="prof"    onChange={(e) => 
            setProff(e.target.value)}/>
            <br></br>
            <label  id='lebleRelation' htmlFor='relationship'>Relationship</label>
            <input type="hobbies" id="relation"    onChange={(e) => 
            setRelationship(e.target.value)}/>
            <br></br>
            <label  id='labelHobbies' htmlFor='hobbies'>Hobbies</label>
            <input type="hobbies" id="hobbies"    onChange={(e) => 
            setHobby(e.target.value)}/>
              <br></br>
              <br></br>
            <button 
            className="saveChanges" onClick={submitHandler}>Save Changes</button>
            </div>
        </div>
    </div>
  )}
