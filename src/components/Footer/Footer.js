import react from 'react'
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        //JSX
    <div className='footer'>
        <h2>Merakilandia</h2>
        <div className='SectionsFooter'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to="/aros">Aros</Link></li>
                <li><Link to="/collares">Collares</Link></li>
            </ul>
        </div>
    </div>
    )
}


export default Footer;

