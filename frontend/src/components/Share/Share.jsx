import React, { useEffect, useState } from 'react';
import './share.css';
import Axios from 'axios';
import { ABC } from '../../dummyData';
import { Posts } from '../../dummyData';
import { Navigate, redirect } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { storage } from '../Share/firebase.js'
import { ref, uploadBytes, listAll } from 'firebase/storage';
import cloudinary from 'cloudinary.v2'
import {v4} from 'uuid'
const Share = () =>  {

  // cloudinary.config({
  //   cloud_name: 'dfv6xvffi',
  //   api_key: '329128548112354',
  //   api_secret: 'J07psZlC7nqL5-vARovuUR1LRbg'

  // });

    const [name,setName]= useState("");
    const [description,setDescription]= useState("");
    const [author,setAuthor]= useState("");
    const [image,setImage]=useState("");
    const [imageList, setImageList] = useState([]);


    const uploadImg = (e) => 
    {
      e.preventDefault();
      if (imageUpload == null) return;
      const imageRef= ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, image).then (() => {
        alert('Uploaded');
        let mylink= imageRef.fullPath
      })
      Axios.post('http://localhost:5000/api/posts/add', 
      {
        description,
        mylink
      })
    };

  // return (
  //   <div className="share">
  //     <div className="shareWrapper">
  //       <div className="shareTop">
  //         <img className="shareProfileImg" src="/assets/mee.jpeg" />
  //         <input
  //           value={description}
  //           type="text"
  //           placeholder="What's in your mind?"
  //           className="shareInput"
  //           onChange={(e) => setDescription(e.target.value)}/>
  //       </div>
        // <hr className="shareHr"></hr>
        // <div className="shareBottom">
        //   <div className="shareOptions">

        //     <div className="shareOption">
            // <input type="file" className="chooseFile" onChange={OnChangeFile}></input>
        //     <i class="fa fa-camera fa-1x"></i>
        //     <span  className="shareOptionText">Multimedia</span>
        //     </div>

  //           <div className="shareOption">
  //             <i class="fa fa-tags fa-1x"></i>
  //             <span className="shareOptionText">Tag</span>
  //           </div>

  //           <div className="shareOption">
  //             <i class="fa fa-smile-o fa-1x"></i>
  //             <span className="shareOptionText">Emoji</span>
  //           </div>

  //           <div className="shareOption">
  //             <i class="fa fa-music fa-1x"></i>
  //             <span className="shareOptionText">Music</span>
  //           </div>
  //         </div>
  //         <button className="shareButton" onSubmit={changeOnClick} >Shareit</button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <form>
     <div className="share">
       <div className="shareWrapper">
         <div className="shareTop">
           <img className="shareProfileImg" src="/assets/mee.jpeg" />
           <input
             value={description}
             type="text"
             placeholder="What's in your mind?"
             className="shareInput"
             onChange={(e) => setDescription(e.target.value)}/>
         </div>
         <input type="file" className="chooseFile" onChange={(e) => {setImage(e.target.files[0])}}/>
      </div>
      </div>
      <button onClick={uploadImg}>Submit</button>
    </form>
  )
}

export default Share;