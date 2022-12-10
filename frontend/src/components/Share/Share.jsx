import React, { useEffect, useState } from 'react';
import './share.css';
import Axios from 'axios';
import { storage } from '../Share/firebase.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid'
const Share = () =>  {
  let email=sessionStorage.getItem("email");
  let name = async () => await Axios.post('http://localhost:5000/api/users/email',
  {
    email
  })
    const [description,setDescription]= useState("");
    const [author,setAuthor]= useState("");
    const [imageUpload,setImageUpload]=useState("");
    const [imageList, setImageList] = useState("");
    const uploadImg = async (e) => {
      e.preventDefault();
      console.log('here')
      const username1=await name()
      const username=username1.data
      console.log('user')
      console.log(username.data);
      if (imageUpload == null) return;
      const imageRef= ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then (() => {
        console.log(imageRef);
        getDownloadURL(imageRef).then(
          URL => {
            Axios.post('http://localhost:5000/api/posts/add', 
            {
              username,
              description,
              img:URL
            })
          }
        )
        .catch 
        (
          e => console.log('err')
        )
        alert('Uploaded');
      })
      console.log(imageList);
    };

 
  return (
    
    <form>
     <div className="share">
       <div className="shareWrapper">
         <div className="shareTop">
           <img className="shareProfileImg" src="/assets/mee.jpeg" />
           <input
             value={description}
             type="text"
             placeholder="What's on your mind?"
             className="shareInput"
             onChange={(e) => setDescription(e.target.value)}/>
         </div>
         <input type="file" className="chooseFile" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      </div>
      </div>
      <button onClick={uploadImg}>Submit</button>
    </form>
  )
}

export default Share;