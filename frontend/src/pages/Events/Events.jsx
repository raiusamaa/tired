import React from 'react'
import Topbar from "../../components/topbar/Topbar.jsx"
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Event from '../../components/Events/Events.jsx'

export default function Events() {
  return (
   <>
   <Topbar/>
   <div className="homeContainer">
    <Sidebar/>
    <Event/>
    </div>

   
   </>
  )
}
