import React from 'react';
import './Sidebar.css';
import Axios from 'axios'
import {Users} from "../../dummyData"
import {useNavigate } from 'react-router-dom';
export default function Sidebar() {

  const navigate=useNavigate();

  const submitHandler = async (e) =>
  {
    e.preventDefault();
    try{

      const { data } = await Axios.post('http://localhost:5000/api/auth/login',
        {
         
        });
      localStorage.setItem("user",JSON.stringify(data));
      navigate('/Events')
      navigate('/Home')
    }
    catch(err)
      {
        console.log(err)
       alert("Something Went Wrong!")
      }
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
          <li className="sidebarListItem">
          <i class="fa fa-home fa-2x" ></i>
          <button  onClick={() => navigate('/Home')} className='sidebarListItemText' >Home</button>
          
          </li>

          <li className="sidebarListItem">
          <i class="fa fa-object-group fa-2x" ></i>
          <button  className='sidebarListItemText'>Communities</button>
            
          </li>

          <li className="sidebarListItem">
          <i class="fa fa-calendar-check-o fa-2x" ></i>
          <button onClick={() => navigate('/Events')} className='sidebarListItemText'>Events</button>
           
          </li>

          <li className="sidebarListItem">
          <i class="fa fa-map-marker fa-2x" ></i>
          <button className='sidebarListItemText'>Location</button>
           

          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"></hr>
        <ul className="sidebarFollowList">
          
          {Users.map(u=>(
            <closeFriends key={u.id} user={u} />
          ))}

        </ul>
      </div>
    </div>
  );
}
