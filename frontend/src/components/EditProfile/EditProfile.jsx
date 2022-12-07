import React, { useState } from 'react'
import "./editProfile.css"
import Axios from 'axios'
import {useNavigate } from 'react-router-dom';
import { Navigate, redirect } from 'react-router';
export default function EditProfile() {

     const [hobbies, setHobbies] = useState('');

     const submitHandler = async (e) =>
     {
      e.preventDefault();
      try
      {
        const { data } = await Axios.post('http://localhost:5000/api/auth/register',
        {
          hobbies
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
            
            {/* <input type="name" id="name"/> */}

            <br></br>

            <label htmlFor='profession'>Profession</label>
            {/* <input type="profession" id="profession"/> */}

            <br></br>

            <label htmlFor='relationship'>Relationship</label>
            {/* <input type="relationship" id="relationship"/> */}

            <br></br>

            <h2> Edit Hobbies</h2>

            <br></br>
            <label htmlFor='hobbies'>Hobbies</label>
            <input type="hobbies" id="hobbies"/>

              <br></br>
            <button 
            // onClick={() => navigate('/Login')}
            className="saveChanges">Save Changes</button>



            </div>

        </div>
      
    </div>
  )
}
