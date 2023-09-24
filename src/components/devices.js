import React from 'react';
import "./devices.css";
import{Link} from "react-router-dom";

export default function Devices() {
  return (
    <>
        <div className="maindevice">
            <div className="devicehead"> Try out our devices</div>
            <div className="deviceitems"> 
                <Link to="/"><img src="/images/devices.jpeg" alt="error" /></Link>
                <Link to="/"><img src="/images/devices2.jpeg" alt="error" /></Link>
                <Link to="/"><img src="/images/devices2.jpeg" alt="error" /></Link>
                <Link to="/"><img src="/images/devices2.jpeg" alt="error" /></Link>
                <Link to="/"><img src="/images/devices3.jpeg" alt="error" /></Link>
                <Link to="/"><img src="/images/devices4.jpeg" alt="error" /></Link>
            </div>
        </div>
    </>
  )
}
