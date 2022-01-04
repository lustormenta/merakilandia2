import React, { useEffect, useState, useContext } from "react";
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logoMeraki.PNG'
import ThemeContext from "../../context/ThemeContext";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

export default function NavBar() {
    const [fixedNavBar, setFixedNavBar] = useState(false)
    const { theme, changeTheme} = useContext(ThemeContext)
    
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
        <AppBar id="header" className={theme ? 'theme-dark' : 'theme-light'} position={fixedNavBar ? "fixed" : "static"}>
            <nav id="menu">
                <div className="container-logo">
                    <Link to='/'><img className="logoMeraki" src={Logo} alt="logo"/></Link>
                    <h1 className="Titulo" >Merakilandia</h1>
                </div>
                <div>
                    <ul>
                        <li><CartWidget /></li>
                        <li><SwitchTheme changeTheme={changeTheme}/></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/AboutUs">About Us</Link></li>
                        <li>
                        <div className="dropdown">
                            <button className="dropbtn">Products</button>
                            <div className="dropdown-content">
                                <li><Link to="/aros">Aros</Link></li>
                                <li><Link to="/collares">Collares</Link></li>
                            </div>
                        </div>
                        </li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </nav>
        </AppBar>
    )
}