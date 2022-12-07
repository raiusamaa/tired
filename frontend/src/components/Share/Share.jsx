import React, { useEffect, useState } from 'react';
import './share.css';
import Axios from 'axios';
import { Navigate, redirect } from 'react-router';
import { useNavigate } from 'react-router-dom';
export default function Share() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  
  


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //Temporary API
      const { data } = await Axios.post(
        'http://localhost:5000/api/auth/register',
        {
          text,
        }
      );

      localStorage.setItem('user', JSON.stringify(data));
      navigate('/Login'); //Temporary
    } catch (err) {
      console.log(err);
      alert('Something Went Wrong!');
    }
  };
  const fileSelectedHandler = (event) =>
  {
    console.log(event.target)
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/mee.jpeg" />
          <input
            value={text}
            type="text"
            placeholder="What's in your mind?"
            className="shareInput"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr className="shareHr"></hr>
        <div className="shareBottom">
          <div className="shareOptions">

            <div className="shareOption">
            <input type="file" className="chooseFile" ></input>
            <i class="fa fa-camera fa-1x"></i>
            <span type="file" className="shareOptionText">Multimedia</span>
              
              
             
            </div>

            <div className="shareOption">
              <i class="fa fa-tags fa-1x"></i>
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <i class="fa fa-smile-o fa-1x"></i>
              <span className="shareOptionText">Emoji</span>
            </div>

            <div className="shareOption">
              <i class="fa fa-music fa-1x"></i>
              <span className="shareOptionText">Music</span>
            </div>

          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
