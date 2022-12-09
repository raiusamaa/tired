import React, { useEffect } from 'react';
import './post.css';
import Axios from 'axios';
import { Users } from '../../dummyData';
import { useState } from 'react';
export default function Post({ post }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [posts, setPosts] = useState('');
  useEffect(() => {
    const fetchdata = async () => {
      const data = await Axios.get('http://localhost:5000/api/posts/get');
      setPosts(data);
    };
    fetchdata();
  }, []);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            />

            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postUsername">{post.date}</span>
          </div>

          <div className="postTopRight">
            <i class="fa fa-bars fa-1x"></i>
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{posts?.desc}</span>
          <img className="postImg" src={posts.photo} />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/heart.png" />
            <img className="likeIcon" src="/assets/like.png" />
            {/* <span className="postLikeCounter">{post.like} people like it</span> */}
          </div>
          <div className="postBottomRight">
            {/* <span className="postCommentText">{post.comment} comments</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
