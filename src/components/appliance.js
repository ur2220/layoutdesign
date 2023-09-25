import React from 'react';
import { Link } from "react-router-dom";
import { LiaThermometerHalfSolid } from "react-icons/lia";
import { PiFanFill } from "react-icons/pi";
import { CgMusicSpeaker } from "react-icons/cg";
import { GiWashingMachine } from "react-icons/gi";
import { BsRouterFill } from "react-icons/bs";
import { CgSmartHomeCooker } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import "./appliance.css";


export default function Appliance() {
    return (
        <>
            <div className="countsec ">
                <h6><Link>Applicances</Link></h6>
                <div className="appliance-data d-flex">
                    <div className="count-items ">

                        <div className="appliance-slider">

                            <div className="appliance-item ">
                                <button className='onoffbtn'></button><div><Link to="/"><LiaThermometerHalfSolid size={60} color='red' /></Link></div>
                                <div className='appliance-catg'>Temp</div>
                            </div>
                            <div className="appliance-item ">
                                <button className='onoffbtn'></button><div><Link to="/"><PiFanFill size={60} /></Link></div>
                                <div className='appliance-catg'>TEST FAN</div>
                            </div>
                            <div className="appliance-item">
                                <button className='onoffbtn'></button> <div><Link to="/"><CgMusicSpeaker size={60} color='maroon' /></Link></div>
                                <div className='appliance-catg'>TEST STRIP</div>
                            </div>
                            <div className="appliance-item">
                                <button className='onoffbtn'></button> <div><Link to="/"><GiWashingMachine size={60} color='#b869f0' /></Link></div>
                                <div className='appliance-catg'>TEST POWER</div>
                            </div>
                            <div className="appliance-item">
                                <button className='onoffbtn'></button> <div> <Link to="/"><BsRouterFill size={60} color='#eb3fa0' /></Link></div>
                                <div className='appliance-catg'>TEST SPEED</div>
                            </div>
                            <div className="appliance-item">
                                <button className='onoffbtn'></button> <div><Link to="/"><CgSmartHomeCooker size={60} color="#f27830" /></Link></div>
                                <div className='appliance-catg'>CONNECTION</div>
                            </div>
                        </div>



                    </div>

                    <div className="graphsec col-4">

                        <div className="graph"> <BsGraphUpArrow size={80} color='red'/></div>
                        <div className="graph-data h-50 w-100">here will be data</div>

                    </div>


                </div>

            </div>
        </>
    )
}
