import './Footer.css';
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import React, { useContext } from 'react';

const Footer = () => {
    const {theme} = useContext(ThemeContext)
    return(
        //JSX
    <div id='footer' className={theme ? 'theme-dark' : 'theme-light'}>
        <h2 className='text'>Merakilandia</h2>
        <div className='SectionsFooter'>
            <ul className='ul'>
                <li className='lista'><Link className='a' to='/'>Home</Link></li>
                <li className='lista'><Link className='a' to='/aboutus'>About Us</Link></li>
                <li className='lista'><Link className='a' to='/contact'>Contact</Link></li>
                <li className='lista'><Link className='a' to="/aros">Aros</Link></li>
                <li className='lista'><Link className='a' to="/collares">Collares</Link></li>
            </ul>
        </div>
    </div>
    )
}


export default Footer;

