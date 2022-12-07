import React, { useEffect, useState } from 'react';
import './share.css';
import Axios from 'axios';
import { ABC } from '../../dummyData';
import { Posts } from '../../dummyData';
import { Navigate, redirect } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
export default function Share() {

 
    const [name,setName]= useState("");
    const [description,setDescription]= useState("");
    const [author,setAuthor]= useState("");
    const [img,setImg]= useState("");
    const [ABC , setABC] = useState(["A", "B"]);

    const OnChangeFile = e =>
    {
      setImg(e.target.files[0]);
    }

    const changeOnClick = (e) =>
    {
      e.preventDefault();

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("author", author);
      formData.append("img", img);


  setName("");
  setDescription("");
  setAuthor("");
  setImg("");

    }
  


 


  // const {user} = useContext(AuthContext)


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

  // 

  const shareFunc = () =>
  {
    Array.prototype.push.call(Posts,7,"assets/5.jpg", "13 hours ago", 5, 12,1)
    console.log(Posts);
    // ABC[0].push(2);
      // ABC.push[0](3);
      // ABC.push[1]("hey");
      // ABC.push(document.getElementById("a").value);
      //  setABC(ABC);

  }

  // var a =[1,2,3,4]
  // var b = a;

  // console.log(a);
  // console.log(b);

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
            <input type="file" className="chooseFile" onChange={OnChangeFile}></input>
            <i class="fa fa-camera fa-1x"></i>
            <span  className="shareOptionText">Multimedia</span>
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
          <button className="shareButton"
          //  onClick={shareFunc()}
           >Share</button>
          {/* {
            Posts.map((val, i ) => 
            
            <div key={"Posts" + i.toString()}> {val}  </div>
            )
          } */}
        </div>
      </div>
    </div>
  );
  }