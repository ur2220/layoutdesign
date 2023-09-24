import {React} from 'react';
import {Link} from "react-router-dom";

import { BsPrinter } from "react-icons/bs";
import{FaKitchenSet,FaBath} from "react-icons/fa6";
import {ImOffice} from "react-icons/im";
import{MdSingleBed} from "react-icons/md";
import{PiOfficeChairBold} from "react-icons/pi";
import "./carousel.css";
export default function Carousel() {
    return (
        <> <div className="cardsection">
            <div className="roomsec">Rooms</div>
            <div className="roomcards d-flex">

                
            
                <Link to="/"><div className="caro-card">
                   <div className="card-details">
                        <h6>LIVING ROOM</h6>
                        <p><BsPrinter size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>

            <Link to="/"> <div className="caro-card bg-warning">
                    <div className="card-details">
                        <h6>KITCHEN</h6>
                        <p><FaKitchenSet size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>

             <Link to="/"><div className="caro-card card-bedroom1">
                    <div className="card-details">
                        <h6>BEDROOM 1</h6>
                        <p><MdSingleBed size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>

                <Link to="/"><div className="caro-card card-bedroom2">
                    <div className="card-details">
                        <h6>BEDROOM 2</h6>
                        <p><MdSingleBed size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>

                <Link to="/"><div className="caro-card card-washroom1">
                    <div className="card-details">
                        <h6>WASHROOM 1</h6>
                        <p><FaBath size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>

                <Link to="/"><div className="caro-card card-office">
                    <div className="card-details">
                        <h6>OFFICE</h6>
                        <p><ImOffice size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>

                <Link to="/"><div className="caro-card card-washroom2">
                    <div className="card-details">
                        <h6>WASHROOM 2</h6>
                        <p><FaBath size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>

                <Link to="/"><div className="caro-card card-other">
                    <div className="card-details">
                        <h6>OTHER</h6>
                        <p><PiOfficeChairBold size={40} /></p>
                        <span>0 UTILITIES</span>
                    </div>
                </div></Link>



                

                



            </div>
</div>
        </>
    )
}
