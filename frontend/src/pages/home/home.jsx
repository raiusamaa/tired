import React from 'react'
import Topbar from "../../components/topbar/Topbar.jsx"
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Feed from '../../components/Feed/Feed.jsx'
import "./home.css"
export default function home() {
  return (
    
    <>
   
    {/* console.log(sessionStorage.getItem("email")) */}
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>

    </div>
   
    </>
    

  )
}



