import {React} from 'react';
import {Link} from "react-router-dom";
import {BsAlexa} from "react-icons/bs";
// import{SiGoogleassistant} from "react-icons/si"
import "./controldevice.css";

export default function Controldevice() {
  return (
    <>

     <div className="main">
        <p>Works with</p>
        <span>Click to watch video demonstrating how to configure</span>
        <div className='contdevices'><Link to="/" className='alexa'><BsAlexa size={30} color='#05A0D1'/>Amazon Alexa </Link> <Link to="/" className='gassistant'> <img src="/images/assistant.png" alt="" />Google Assistant</Link></div>
     </div>

    </>
  )
}
