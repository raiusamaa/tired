import React from 'react'
import "./post.css"
import {Users} from "../../dummyData"
export default function Post({post}) {
    
  
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture}/>
                <span className='postUsername'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                <span className='postUsername'>{post.date}</span>
            </div>
            <div className="postTopRight">
            <i class="fa fa-bars fa-1x" ></i>
            </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img  className='likeIcon'  src="/assets/heart.png"/>
                    <img className='likeIcon'   src="/assets/like.png"/>
                    <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
        </div>
  )
}