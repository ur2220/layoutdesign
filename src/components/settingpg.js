import React from 'react';
import "./settingpg.css";
import {Link} from "react-router-dom";

export default function Settingpg() {


    const logout=()=>{
        localStorage.clear()
        window.location.reload()
    }


  return (

    <>
      <div className="setting-main">
        <div className="setimg"> <img src="/images/setimg.png" alt="error" /></div>

        <div className="device-version">
          <h6>ABOUT DEVICE</h6>
          <span>Current version:1.0</span>
        </div>


        <div className="set-body-btn">
          
          <div className="btn-lg"><button>CHECK FOR UPDATE</button></div>
        </div>
        <hr />
        <div className="set-body-btn">
        PRIVACY POLICY
        <div className="btn-sm"><button >Read</button></div>
        </div>

        <hr />

        <div className="set-body-btn">
        AGREEMENT
        <div className="btn-sm"><button >Read</button></div>
        </div>
        <hr />

        <div className="set-body-btn">
        CONTACT US 
        <p><Link>contact@me.in</Link></p>
        <div className="btn-sm"><button onClick={logout} >Logout</button></div>
        </div>


      </div>


    </>
  )
}
