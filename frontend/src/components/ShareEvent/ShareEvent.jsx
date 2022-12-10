// import React, { useEffect, useState } from 'react';
// import './shareevent.css';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import Axios from 'axios';

// import { useNavigate, Link } from 'react-router-dom';
// export default function ShareEvent() 
// {

//   let email=sessionStorage.getItem("email");
//   let name = async () => await Axios.post('http://localhost:5000/api/users/email',
//   {
//     email
//   })
//   const [hobbies, setHobbies] = useState("");
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const [stars, setStarCount] = useState("");
//   const [description, setEventDetails] = useState("");
//   const [imageUpload,setImageUpload]=useState("");

//   const options = ['follower1', 'follower2'];
//   const defaultOption = options[0];

//   const uploadImg = async (e) => {
//     e.preventDefault();
//     const username1=await name()
//     const username=username1.data
//     if (imageUpload == null) return;
//     const imageRef= ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then (() => {
//       console.log(imageRef);
//       getDownloadURL(imageRef).then(
//         URL => {
//           Axios.post('http://localhost:5000/api/posts/add', 
//           {
//             username,
//             description,
//             img:URL
//           })
//         }
//       )
//       .catch 
//       (
//         e => console.log('err')
//       )
//       alert('Uploaded');
//     })
//     console.log(imageList);
//   };




//   return (
//     <div className="shareevent">
//       <div className="shareeventWrapper">
//         <div className="shareeventTop">
//           <img className="shareProfileImg" src="/assets/mee.jpeg" />
//           <label className='eventTitle'>Title </label>
//           <input type="text" className='eventTitleInput' onChange={(e) => setTitle(e.target.value)}/>
//           <br></br>
//           <div className="shareeventOption">
//           <input type="file" className="chooseEventFile" />
//           </div>
//           <br></br>
          
//           <label className="labelAddHobbies">Add hobbies</label>
//           <input type="text" className="addHobbies" onChange={(e) => setHobbies(e.target.value)}/>

//           <label className="labelAddLocation">Add Location</label>
//           <input type="text" className="addLocation" onChange={(e) => setLocation(e.target.value)}/>
//           <i class="fa fa-star fa-1x" id="star"></i>
//           <input type="text" className="starCount" onChange={(e) => setStarCount(e.target.value)}/>
//         </div>
//       </div>
      

//       <hr className="shareventHr"></hr>
//      <div className="shareeventBottom">
//         <div className="shareeventOptions">
//           <div className="shareeventOption">
          
//               <button  class="btn btn-secondary dropdown-toggle"    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="inviteButton">Invite Followers</button>
//               {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
            
         
//           <input type="text"placeholder='Write anything about event' className="shareeventInput" onChange={(e) => setEventDetails(e.target.value)}/>
//           <br></br>
//         </div>
//           <div className="shareeventOption">
//             <button className="createButton"  onClick={uploadImg}>Create</button>
//           </div>
          
//          </div>
//        </div>
//      </div>
//   );
// }
