import React from 'react';
import "./counter.css";

export default function Counter() {
    return (
        <>
            <div className="counting">
            <div className="countfirst">
                <h6>Welcome to SWYAM Smart Home</h6>
                <span> 0 device is connected to SWYAM cloud </span>
                </div>
                <div className="countsec">
                <h6>Applicances</h6>
                <span>No devices,navigate to any room and add device </span>
                </div>
            </div>
        </>
    )
}
