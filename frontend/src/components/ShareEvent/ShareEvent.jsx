import React from 'react';
import './shareevent.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate, Link } from 'react-router-dom';
export default function ShareEvent() 
{
  return (
    <div className="shareevent">
      <div className="shareeventWrapper">
        <div className="shareeventTop">
          <img className="shareProfileImg" src="/assets/mee.jpeg" />
          <input
            type="text"
            placeholder="Write anything about the event"
            className="shareeventInput"
          />
          <br></br>
          <label className="labelAddHobbies">Add hobbies</label>
          <input type="text" className="addHobbies" />

          <label className="labelAddLocation">Add Location</label>
          <input type="text" className="addLocation" />
          <i class="fa fa-star fa-1x" id="star"></i>
          <input type="text" className="starCount" />
        </div>
      </div>

      <hr className="shareventHr"></hr>
     <div className="shareeventBottom">
        <div className="shareeventOptions">
          <div className="shareeventOption">
             <Dropdown>
              <button className="inviteButton">Invite</button>
              <div class="dropdown-content">
                {/* Followers List */}
                <Link to="#">Organization</Link>
               <Link to="#">NGO</Link>
                              <Link to="#">Educational Institue</Link>
              </div>
          </Dropdown>
        </div>
          <div className="shareeventOption">
            <button className="createButton">Create</button>
          </div>
         </div>
       </div>
     </div>
  );
}
