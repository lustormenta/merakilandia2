import React from "react";
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'


export default function NavBar() {
    return(
        <AppBar className="header" position="static">
            <nav id="menu">
                <div className="container-logo">
                    <img className="logoMeraki" src={process.env.PUBLIC_URL + "assets/logoMeraki.png"} alt="logo"/>
                    <h1 className="Titulo" >Merakilandia</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/AboutUs">About Us</Link></li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </nav>
        </AppBar>
    )
}