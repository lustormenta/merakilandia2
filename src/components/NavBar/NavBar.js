import React from "react";
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import CartWidget from '../CartWidget/CartWidget';


export default function NavBar() {
    return(
        <AppBar position="static">
        <nav id="menu">

        <div className="container-logo">
            <img className="logoMeraki" src={process.env.PUBLIC_URL + "assets/logoMeraki.png"} alt="logo"/>
            <h1 className="Titulo" >Merakilandia</h1>
        </div>
        <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
        <CartWidget />
        </div>
        </nav>
        </AppBar>
    )
}