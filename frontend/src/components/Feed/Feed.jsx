import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import "./Feed.css"
import Axios from "axios"
import {Posts} from "../../dummyData"
import { useEffect } from 'react'
export default function Feed() {
//   async function getData() 
// {
//   const myData=await Axios.get ('http://localhost:5000/api/posts');
//   console.log("hello bbay");
//   console.log(myData['data'][0].username);
// }
//   getData();
// useEffect(() => 
// {
//   const fetchData = async () =>
//   {
//     const data = await Axios.get('http://localhost:5000/posts/get');
//     console.log("hellllooo >>>>>", data)
//   };
// fetchData();
// }, []);

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {
          Posts.map(p=>
            (
              <Post key={p.id} post={p}/>

            ))
        }
        
      </div>
    </div>
  )
}
