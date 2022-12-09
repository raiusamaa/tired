// import React, { useEffect, useState } from 'react';
// import './share.css';
// import Axios from 'axios';
// const Share = () =>  {

//     // const [name,setName]= useState("");
//     const [description,setDescription]= useState("");
//     // const [author,setAuthor]= useState("");
//     // const [imageUpload,setImageUpload]=useState("");
//     const [image, setImage] = useState([]);
//     const uploadImg = (e) => {
//       e.preventDefault();
//       let formData = new FormData()
//       formData.append('description', description);
//       formData.append('Images',image)
//       console.log(description)
//       console.log(image)
//       const myurl= 'http://localhost:5000/api/posts/add'
//       Axios.post(myurl,formData) 
//         .then (result => 
//           {
//         console.log(result)
//       })
//       .catch (err => {
//         console.log(err)
//       })
//     };

//   // return (
//   //   <div className="share">
//   //     <div className="shareWrapper">
//   //       <div className="shareTop">
//   //         <img className="shareProfileImg" src="/assets/mee.jpeg" />
//   //         <input
//   //           value={description}
//   //           type="text"
//   //           placeholder="What's in your mind?"
//   //           className="shareInput"
//   //           onChange={(e) => setDescription(e.target.value)}/>
//   //       </div>
//         // <hr className="shareHr"></hr>
//         // <div className="shareBottom">
//         //   <div className="shareOptions">

//         //     <div className="shareOption">
//             // <input type="file" className="chooseFile" onChange={OnChangeFile}></input>
//         //     <i class="fa fa-camera fa-1x"></i>
//         //     <span  className="shareOptionText">Multimedia</span>
//         //     </div>

//   //           <div className="shareOption">
//   //             <i class="fa fa-tags fa-1x"></i>
//   //             <span className="shareOptionText">Tag</span>
//   //           </div>

//   //           <div className="shareOption">
//   //             <i class="fa fa-smile-o fa-1x"></i>
//   //             <span className="shareOptionText">Emoji</span>
//   //           </div>

//   //           <div className="shareOption">
//   //             <i class="fa fa-music fa-1x"></i>
//   //             <span className="shareOptionText">Music</span>
//   //           </div>
//   //         </div>
//   //         <button className="shareButton" onSubmit={changeOnClick} >Shareit</button>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <form>
//      <div className="share">
//        <div className="shareWrapper">
//          <div className="shareTop">
//            <img className="shareProfileImg" src="/assets/mee.jpeg" />
//            <input
//              value={description}
//              type="text"
//              placeholder="What's in your mind?"
//              className="shareInput"
//              onChange={(e) => setDescription(e.target.value)}/>
//          </div>
//          <input type="file" className="chooseFile" onChange={(e) => {setImage(e.target.files)}}/>
//       </div>
//       </div>
//       <button onClick={uploadImg}>Submit</button>
//     </form>
//   )
// }

// export default Share;

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
         <input type="file" className="chooseFile" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      </div>
      </div>
      <button onClick={uploadImg}>Submit</button>
    </form>
  )
}

export default Share;