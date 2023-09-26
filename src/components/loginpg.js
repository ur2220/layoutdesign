
import React, { useEffect,useState} from 'react';
import "./loginpg.css";
import {FcGoogle} from "react-icons/fc";
import {auth,provider} from "./config";
import { signInWithPopup } from 'firebase/auth';
import Counter from './counter';
import {Link} from "react-router-dom";

export default function Loginpg() {
const[value,setValue] = useState("")
const handleClick=()=>{


    signInWithPopup(auth,provider).then(  (data)=>{
         setValue(data.user.email)
         localStorage.setItem("email",data.user.email)
    })
}

useEffect(()=>{
    setValue(localStorage.getItem("email"))
},[] )

  return (
    <>
  
  {value?<Counter/>:
 
 <div className="login-interface">
 <div className="brandimg"> <img src="/images/loginbrandimg.png" alt="" /></div>
 <div className="brandimg"> <h3>Sign in with</h3><h3>Google</h3> <input type="checkbox" />  <span>I agree with <Link>Service Agreement</Link> and <Link>Privacy Policy</Link></span></div>
 <button onClick={handleClick} className='loginbtn'> <FcGoogle size={30}/>  Sign In</button></div>
 }
 
 

      
    </>
  )
}
