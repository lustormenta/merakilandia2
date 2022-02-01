import './AboutUsPage.css'
import ThemeContext from '../../context/ThemeContext'
import React, { useContext } from 'react';

export default function AboutUsPage() {
    const {theme} = useContext(ThemeContext)
    return (
        <div id='aboutUsContainer' className={theme ? 'theme-dark' : 'theme-light'}>
            <h2 className='sobreMi'>꧁ ¿Quien soy? ꧂</h2>
            <img className='imgBio' src='./assets/perfil-modified.png'></img>
            <div className='parrafo'>
            <p className='bio'>Hola! Mi nombre es Lucia y comence este emprendimiento artistico ya que amo las manualides y la pintura. Mi proposito con esta tiendita es poder vender los productos que disfrute tanto hacer y que a cada uno le genere algo especial al usarlo, ya que se hacen con mucha dedicacion. Espero puedan disfrutarlos ♡.</p>
            </div>
        </div>
    )
}
