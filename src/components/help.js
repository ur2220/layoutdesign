import React from 'react';
import {Link} from "react-router-dom";
import "./help.css";


export default function Help() {
   
    return (
        <>
            <div className="helpmain">

                <div className="imgsec"><img src="/images/helppg.jpeg" alt="" /></div>

                <div className="instructions">
                    <Link><h5>INSTRUCTION MANUAL </h5></Link>
                    <Link><h6>FAQ</h6></Link>
                </div>

            </div>

        </>
    )
}
