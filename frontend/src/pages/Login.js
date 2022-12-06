import React, {useState} from "react";
import Axios from 'axios'
import icon from '../social-media-marketing.gif';
import {useNavigate } from 'react-router-dom';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const[password, setPass] = useState('');
    const navigate=useNavigate()
    const submitHandler = async (e) =>
    {
      e.preventDefault();
      try {
       console.log(email,password)
        const { data } = await Axios.post('http://localhost:5000/api/auth/login',
        {
          email,
          password,
        });
        if(data.message == 'Invalid Credentials') {
          alert("Invalid Credentials!")
          return
        }
        localStorage.setItem("user",JSON.stringify(data));
        navigate('/Home')
      }
      catch(err)
      {
        console.log(err)
       alert("Something Went Wrong!")
      }
}
return (
    <div className="LoginForm">
      <img src={icon} id="icon"/>
        <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="name@gmail.com" id="email"
         onChange={(e) => 
          setEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input value={password} type="password" placeholder="*****" id="password"
         onChange={(e) => 
          setPass(e.target.value)}/>
          <button onClick={() => navigate('/Home')} id='SignupButton'>Login</button>
    </div>

  )
};
export default Login
