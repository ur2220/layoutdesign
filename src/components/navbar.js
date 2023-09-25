import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillSetting } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";


export default function Navbar() {
    return (
        <>

            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className='nav-link  active'><Link to="/"><IoMdHelpCircle size={40} color='skyblue' /></Link></div>



                    <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Login with</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/"><AiFillSetting size={40} color='#0949b0' /> Setting</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                        <IoMdHelpCircle size={40} color='skyblue'/> Help
                                    </Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
