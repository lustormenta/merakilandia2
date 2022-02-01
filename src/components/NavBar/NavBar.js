import React, { useEffect, useState, useContext } from "react";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
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

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    const myFunction = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    
    return(
        <div id="myTopnav" className={`topnav ${theme ? 'theme-dark' : 'theme-light'}`} position={fixedNavBar ? "fixed" : "static"}>
            <div className="container-logo">
                <Link to='/' className="navbar--link"><h1 className="Titulo" >Merakilandia</h1></Link>
            </div>
            <div className="iconos">
            <CartWidget />
            <SwitchTheme changeTheme={changeTheme}/>
            </div>
            <Link to="/" className="navbar--link">Inicio</Link>
            <Link to="/aboutus" className="navbar--link">Sobre mi</Link>
            <div className="dropdown">
                <button className="dropbtn">Productos
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to="/aros" className="navbar--link">Aros</Link>
                    <Link to="/collares" className="navbar--link">Collares</Link>
                </div>
            </div>
            <Link to="/contact" className="navbar--link">Contacto</Link>
            <a href="javascript:void(0);" className="icon" onClick={() => myFunction()}>&#9776;</a>
        </div>
    )
}