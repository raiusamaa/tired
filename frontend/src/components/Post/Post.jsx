import React from 'react';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';
import Axios from "axios"
export default function Post({ post }) {
// async function getData() 
// {
//   const myData=await Axios.get ('http://localhost:5000/api/posts');
//   console.log(myData['data'][0].username);
// }
//   getData();
  return (
    <div className="post">
      
      <div className="postWrapper">
      {/* <hr className="postHr1"></hr> */}
      {/* <hr className="postHr2"></hr> */}
      {/* <hr className="postHr3"></hr>
      <hr className="postHr4"></hr> */}
        <div className="postTop">
          <div className="postTopLeft">
         
          <i class="fa fa-user-circle-o fa-2x" id="usernameIcon" ></i>
            <span className="postUsername">
              {post.username} 
             
            </span>
           {/* <div className='postingText'>
            <p>posted something new</p>
           </div> */}

           
           
            
            
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <i class="fa fa-bars fa-1x" id='postBars'></i>
            <i class="fa fa-share fa-1x" id='postShare'></i>
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.description}</span>
         
          <img className="postImg" src={post.img} />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/heart.png" />
            <img className="likeIcon" src="/assets/like.png" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}