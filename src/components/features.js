import React from 'react';
import { Link } from "react-router-dom";
import { FcCustomerSupport } from "react-icons/fc";
import { MdElectricBolt } from "react-icons/md";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoTimer } from "react-icons/io5";
import { GrMultimedia } from "react-icons/gr";
import "./features.css";

export default function Features() {
    return (
        <>
            <div className="featmain">

                <div className="featheading">Features</div>
                <div className="featcontainer d-block">
                    <div className="featcontent">
                        <div className="featitems"> <Link to="/"><FcCustomerSupport size={40} /></Link></div>
                        <div className="featitems"> <Link to="/"><MdElectricBolt size={40} color='#ed9f39' /></Link></div>
                        <div className="featitems"> <Link to="/"><HiMiniBellAlert size={40} color='#f7501e' /></Link></div>
                        <div className="featitems"><Link to="/"> <IoTimer size={40} color='#c85de8' /></Link></div>
                        <div className="featitems"> <Link to="/"><GrMultimedia size={40} color='grey' /></Link></div>
                    </div>
                    <div className="featcontent-intro">
                        <div className="featitems-intro">Support</div>
                        <div className="featitems-intro">Usage</div>
                        <div className="featitems-intro">Alerts</div>
                        <div className="featitems-intro">Schedule</div>
                        <div className="featitems-intro">Scenes</div>
                    </div>
                </div>


            </div>
        </>
    )
}
