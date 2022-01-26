import React from "react";
import { Link } from "react-router-dom";
import './navlink.css';

export const Navlink = () =>{
    return(
        <div className="navlink-container">
            <div className="navlink">
                <Link to="/home" className="navlink-link">Home</Link>
                <Link to="/newReport" className="navlink-link">New Report</Link>
                <Link to="/playerReports" className="navlink-link">Player Reports</Link>
                <Link to="/schedule" className="navlink-link">Schedule</Link>
            </div>
        </div>
        
    )
}