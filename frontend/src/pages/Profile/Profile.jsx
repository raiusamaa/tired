import React from 'react'
import Topbar from "../../components/topbar/Topbar.jsx"
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Profile from '../../components/EditProfile/EditProfile.jsx'
import Axios from 'axios'
export default function home() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
   <Profile/>
    </div>
    </>
  )
}



