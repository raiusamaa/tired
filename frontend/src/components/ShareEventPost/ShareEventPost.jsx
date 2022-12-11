import React from 'react'
import './shareeventPost.css';
import { Users } from '../../dummyData';
import { useState } from 'react';
import Axios from "axios"
export default function ShareEventPost({event}) {
  //console.log(event)
  return (
    <div className='shareeventPost'>
        <div className="shareeventWrapper">
          {/* Top */}
            <div className="shareeventPostTop">
                <div className="shareeventPostTopLeft">
                <i class="fa fa-user-circle-o fa-2x" id="usernameIcon"></i>
                <span className="postUsername">{event.createdBy}</span>
                
                <span className="postDate">{event.date}</span>

                </div>

                <div className="shareeventPostTopRight">
                <i class="fa fa-bars fa-1x" id="postBars"></i>
            <i class="fa fa-share fa-1x" id="postShare"></i>
                </div>

              
            </div>

            {/* Center */}
            <div className="shareeventPostCenter">
                <span className="postText">{event?.description}</span>
                <img className="postImg" src={event.img} />
            </div>
        </div>


        {/* Bottom */}
        <div className="shareeventPostBottom">
          <div className="shareeventPostBottomLeft">
          <i class="fa fa-heart fa-2x" id="likeIcon"></i>
          <i class="fa fa-comment fa-2x" id="commentIcon"></i>
    
            <i class="fa fa-smile-o fa-2x" id="smileIcon"></i>
           

          </div>
          <div className="shareeventPostBottomRight">
          <span className="postCommentText">comments</span>
          </div>
        </div>

      
    </div>
  )
}
