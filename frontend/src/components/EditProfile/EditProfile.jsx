import React, { useState } from 'react'
import "./editProfile.css"
import {useNavigate } from 'react-router-dom';
import { Navigate, redirect } from 'react-router';
export default function editProfile() {

    // const [hobbies, setText] = useState('');
  return (
    <div className='Profile'>
        <div className="profileWrapper">
            <h1 className="title">Profile</h1>

            <div className='UpdateForm'>
            <label htmlFor='name'>Name</label>
            <input type="name" id="name"/>

            <br></br>

            <label htmlFor='profession'>Profession</label>
            <input type="profession" id="profession"/>

            <br></br>

            <label htmlFor='relationship'>Relationship</label>
            <input type="relationship" id="relationship"/>

            <br></br>

            <h2> Add Hobbies</h2>

            <br></br>
            <label htmlFor='hobbies'>Hobbies</label>
            {/* <input value={hobbies}  type="hobbies" id="hobbies"/> */}


            </div>

        </div>
      
    </div>
  )
}
