import './Item.css';
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'



export default function Item({data}) {
    const {theme} = useContext(ThemeContext)
    
    return(
        //JSX
        <div className={theme ? 'theme-dark' : 'theme-light'}>
            <img className='fotos' src= {`./assets/${data.img}`} alt={data.name} width="300" height="300"/>
            <h3>{data.name}</h3>
            <b>${data.price}</b>
            <p>Stock: {data.stock}</p>
            <Link to={`/product/${data.id}`}><button className='btn-comprar'>Comprar</button></Link>
        </div>
    )
}

