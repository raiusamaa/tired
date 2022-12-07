import React from 'react'

export default function ShareEvent() {
  return (
    <div className='shareevent'>
        <div className='shareeventWrapper'>
           <div className="shareeventTop">
           <img className="shareProfileImg" src="/assets/mee.jpeg" />
           <input
            // value={text}
            type="text"
            placeholder="Write title of the event"
            className="shareeventInput"
            // onChange={(e) => setText(e.target.value)}
          />
           </div>
           
        </div>

        <hr className='shareventHr'></hr>

        <div className="shareeventBottom">
            <div className="shareeventOptions">

            </div>
        </div>
    </div>
  )
}
