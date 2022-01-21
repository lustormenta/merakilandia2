import './Item.css';
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'


export default function Item({data}) {
    const {theme} = useContext(ThemeContext)
    const {name, price, img, id, stock} = data
    return(
        //JSX
        <div className={theme ? 'theme-dark' : 'theme-light'}>
            <img className='fotos' src= {`./assets/${img}`} alt={name} width="300" height="300"/>
            <h3>{name}</h3>
            <b>${price}</b>
            <p>Stock: {stock}</p>
            <Link to={`/product/${id}`}><button className='btn-comprar'>Comprar</button></Link>
        </div>
    )
}

