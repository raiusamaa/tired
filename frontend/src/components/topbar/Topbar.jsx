import "./topbar.css"
import {useNavigate } from 'react-router-dom';

export default function Topbar(props) {
  const navigate=useNavigate()
  const submitHandler = async (e) =>
  {
    try
    {
      // localStorage.setItem("user",JSON.stringify(data));
      navigate('/Profile')
    }
    catch(err)
    {

    }
  }
  return (

    <div className="topbarContainer">
       <div className="topbarLeft">
        <img className="VLogo" src="/assets/v.gif" alt="" />
        <span className="logo">VeteranMeet</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        
          <input type="text" placeholder="Search for friends or posts" className="searchInput" />
          
        </div>
      </div>
     <div className="topbarRight">
        <div className="topbarLinks">
        <i class="fa fa-home fa-1x" ></i>
          <span className="topbarLink">Home</span>
          <i class="fa fa-clock-o fa-1x" ></i>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
         
        </div>
        <button onClick={() => navigate('/Profile')} className="topbarImage"><i class="fa fa-user fa-2x" ></i></button>
       
      </div> 
    </div>
  )
}
