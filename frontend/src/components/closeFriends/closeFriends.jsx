import React from 'react'
import "./closeFriends.css"
export default function closeFriends({user}) {
  return (
    <li className="sidebarFollower">
            <img className="sidebarFollowerImg" src={user.profilePicture} />
            <span className="sidebarFollowerName">{user.username}</span>
          </li>
  )
}
