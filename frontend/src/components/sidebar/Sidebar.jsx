import React from 'react';
import './Sidebar.css';
import {Users} from "../../dummyData"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
          <li className="sidebarListItem">
          <i class="fa fa-home fa-2x" ></i>
            <span className="sidebarListItemText">Home</span>
          </li>

          <li className="sidebarListItem">
          <i class="fa fa-object-group fa-2x" ></i>
            <span className="sidebarListItemText">Communities</span>
          </li>

          <li className="sidebarListItem">
          <i class="fa fa-calendar-check-o fa-2x" ></i>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
          <i class="fa fa-map-marker fa-2x" ></i>
            <span className="sidebarListItemText">Location</span>
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
