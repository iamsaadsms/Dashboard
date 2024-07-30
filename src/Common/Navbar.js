import React from "react";
import './Navbar.css';
import logo from '../Media/logo.png';

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="nav-img">
                <img src={logo} className="logo-nav" alt="Logo" />
            </div>

            <div className="nav">
                <span className="nav-h">ADMIN DASHBOARD</span>
            </div>
        </div>
    )
}

export default Navbar;