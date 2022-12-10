import React from 'react';
import './post.css';
// import $ from 'jquery';
import { Users } from '../../dummyData';
import { useState } from 'react';
import Axios from 'axios';
export default function Post({ post }) {

  // {
  // <script>
  //           $(document).ready(function()
  //           {$('#follow-button').click(function () {
  //             if ($('#follow-button').text() == '+ Follow') {
  //               $('#follow-button').animate(
  //                 { width: '-=10px' },
  //                 100,
  //                 'easeInCubic',
  //                 function () {}
  //               );

  //               $('#follow-button').animate(
  //                 { width: '+=45px', left: '-=15px' },
  //                 600,
  //                 'easeInOutBack',
  //                 function () {
  //                   $('#follow-button').css('color', '#fff');
  //                   $('#follow-button').text('Following');

  //                   $('#follow-button').animate(
  //                     {
  //                       backgroundColor: '#2EB82E',
  //                       borderColor: '#2EB82E',
  //                     },
  //                     1000
  //                   );
  //                 }
  //               );
  //             } else {
  //               $('#follow-button').animate(
  //                 { width: '-=25px', left: '+=15px' },
  //                 600,
  //                 'easeInOutBack',
  //                 function () {
  //                   $('#follow-button').text('+ Follow');
  //                   $('#follow-button').css('color', '#3399FF');
  //                   $('#follow-button').css('background-color', '#ffffff');
  //                   $('#follow-button').css('border-color', '#3399FF');
  //                 }
  //               );
  //             }
  //           })}
  //           );
  //         </script>

  // }

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
            {/* <button className="follow-button">+ Follow</button> */}

            {/* <script src='https://kit.fontawesome.com/a076d05399.js'></script>
            <div className='center'>
              <ul>
             <li><i class="fa fa-check fa-1x" ></i></li> 
            <div className="followText">Follow</div>
            

              </ul>
            </div> */}
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
