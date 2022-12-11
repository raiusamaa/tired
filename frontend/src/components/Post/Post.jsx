import React from 'react';
import './post.css';
// import $ from 'jquery';
import { Users } from '../../dummyData';
import { useState } from 'react';
import Axios from 'axios';
export default function Post({ post }) {

 

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <i class="fa fa-user-circle-o fa-2x" id="usernameIcon"></i>
            <span className="postUsername">{post.username}</span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <i class="fa fa-bars fa-1x" id="postBars"></i>
            <i class="fa fa-share fa-1x" id="postShare"></i>
           
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.description}</span>

          <img className="postImg" src={post.img} />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
          <i class="fa fa-heart fa-2x" id="likeIcon"></i>
          <i class="fa fa-comment fa-2x" id="commentIcon"></i>
    
            <i class="fa fa-smile-o fa-2x" id="smileIcon"></i>
            {/* <span className="postLikeCounter">{post.like} people like it</span> */}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
