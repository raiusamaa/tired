import React from "react";
import "./events.css"

import Axios from "axios"
import ShareEvent from "../ShareEvent/ShareEvent"
import ShareEventPost from '../ShareEventPost/ShareEventPost'

export default class Events extends React.Component
{
  state=
  {
    events:[]
  }
  componentDidMount(){
    Axios.get('http://localhost:5000/api/events')
    .then (res => {this.state.events=res.data
    console.log(this.state.events)
    console.log('ddaa')
    this.setState({})
  })
  }
render(){
  return(
    <div className='Events'>
      <div className='eventsWrapper'>
        <ShareEvent/>
        <ShareEventPost/>
        {/* {
          this.state.events.map(p=>
            (
              <ShareEventPost key={p._id} event={p}/>
            ))

        } */}
      </div>
    </div>
  )

}
}




// import React from 'react'
// import "./events.css"
// import Axios from "axios"
// import ShareEventPost from '../ShareEventPost/ShareEventPost'
// import ShareEvent from "../ShareEvent/ShareEvent"

// export default class Events extends React.Component() {

//   state=
//   {
//     events:[]
//   }

//   componentDidMount(){
//     Axios.get('http://localhost:5000/api/events')
//     .then (res => {this.state.events=res.data
//     console.log(this.state.events)
//     console.log('ddaa')
//     this.setState({})
//   })
//   }

// render() {
//   return (
//     <div className='Events'>
//         <div className='eventsWrapper'>
//             <ShareEvent/>
//             {
//               this.state.events.map(p=>
//             (
//               <ShareEventPost key={p._id} event={p}/>
//             ))
//         }

//         </div>
//     </div>
//   )
// }

// }
 
