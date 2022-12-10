import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import "./Feed.css"
import Axios from "axios"
import {Posts} from "../../dummyData"
import { useEffect } from 'react'
//export default class Post extends React.Component
export default class Feed extends React.Component {
  
  state=
  {
    posts:[]
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/api/posts')
    .then (res => {this.state.posts=res.data
    console.log(this.state.posts)
    console.log('ddaa')
    this.setState({})
  })
  }

render()
{
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {
          this.state.posts.map(p=>
            (
              <Post key={p._id} post={p}/>
            ))
        }
        
      </div>
    </div>
  )
}
}
