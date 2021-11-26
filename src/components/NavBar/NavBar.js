import React from "react";
import './NavBar.css';
import AppBar from '@mui/material/AppBar';

export default function NavBar() {
    return(
        <AppBar position="static">
        <nav id="menu">

        <div className="container-logo">
            <img className="logoMeraki" src={process.env.PUBLIC_URL + "assets/logoMeraki.png"} alt="logo"/>
        </div>
        <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
        </div>
        </nav>
        </AppBar>
    )
}