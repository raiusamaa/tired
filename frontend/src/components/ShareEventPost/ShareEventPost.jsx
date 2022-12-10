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
          <img className="likeIcon" src="/assets/heart.png" />
            <img className="likeIcon" src="/assets/like.png" />
            {/* <span className="postLikeCounter">{event.like} people like it</span> */}

          </div>
          <div className="shareeventPostBottomRight">
          {/* <span className="postCommentText">{event.comment} comments</span> */}
          </div>
        </div>

      
    </div>
  )
}
