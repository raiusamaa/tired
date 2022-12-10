import React from 'react';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';
export default function Post({ post }) {
<<<<<<< HEAD
  const onSubmit = (e) => {
    e.preventDefault();
  };
  // const getData = async () => await Axios.post('http://localhost:5000/api/users/email');
  // const response = getData.json();
  // console.log(response);

  // const [posts, setPosts] = useState('');
  // useEffect(() => {

  //   const fetchdata = async () => await Axios.get ('http://localhost:5000/api/posts');
  //   console.log(fetchdata.data);

  //   // const fetchdata = async () => {
  //   //   const data = await Axios.get('http://localhost:5000/api/posts/');
  //   //   setPosts(data);
  //   };
  //   fetchdata();

=======
async function getData() 
{
  const myData=await Axios.get ('http://localhost:5000/api/posts');
  //const response=myData.json();
  const response=
  console.log(myData['data'][0].username);
}
  getData();
>>>>>>> b5e443a89a589d6ce0367e06c1b90ad3be0cef9a
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
<<<<<<< HEAD
          {/* <span className="postText">{posts?.desc}</span>
          <img className="postImg" src={posts.photo} /> */}
=======
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} />
>>>>>>> b5e443a89a589d6ce0367e06c1b90ad3be0cef9a
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
