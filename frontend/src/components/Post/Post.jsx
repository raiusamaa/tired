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
      {/* <img src={post.img}></img> */}
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img
              className="postProfileImg"
              src={post.img}
            /> */}

            <span className="postUsername">
              {post.username}
            </span>
            <span className="postUsername">{post.date}</span>
          </div>

          <div className="postTopRight">
            <i class="fa fa-bars fa-1x"></i>
          </div>
        </div>

        <div className="postCenter">
<<<<<<< HEAD
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} />
=======
          <span className="postText">{post?.description}</span>
          <img className="postImg" src={post.img} />
>>>>>>> ce5203610ce8e97312115c6baf6620edcd8d2e92
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