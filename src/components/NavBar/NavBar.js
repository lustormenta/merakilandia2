import React, { useEffect, useState } from "react";
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logoMeraki.PNG'

export default function NavBar() {
    const [fixedNavBar, setFixedNavBar] = useState(false)

    useEffect(() => {
        function onScrollWindow() {
            if(window.scrollY > 100 ){
                setFixedNavBar(true)
            }else{
                setFixedNavBar(false) 
            }
        }

        window.addEventListener('scroll', onScrollWindow)
        //unmounth
        return() => {
            window.removeEventListener('scroll', onScrollWindow)
        }
    }, [])

    return(
        <AppBar className="header" position={fixedNavBar ? "fixed" : "static"}>
            <nav id="menu">
                <div className="container-logo">
                    <img className="logoMeraki" src={Logo} alt="logo"/>
                    <h1 className="Titulo" >Merakilandia</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/AboutUs">About Us</Link></li>

                        <div className="dropdown">
                            <button className="dropbtn">Products</button>
                            <div className="dropdown-content">
                                <li><Link to="/aros">Aros</Link></li>
                                <li><Link to="/collares">Collares</Link></li>
                            </div>
                        </div>
                        
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </nav>
        </AppBar>
    )
}