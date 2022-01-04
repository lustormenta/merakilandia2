import './Item.css';
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'



export default function Item({data}) {
    const {theme} = useContext(ThemeContext)
    const [itemCart, setItemCart]= useState(
        {
            name: data.name,
            id: data.id,
            quantity: 0
        }
    )
    const onAdd = (value) => {
        console.log("items agregados: ", value)
        itemCart.quantity = value
    }
    return(
        //JSX
        <div className={theme ? 'theme-dark' : 'theme-light'}>
            <img className='fotos' src= {data.img} alt={data.name} width="300" height="300"/>
            <h3>{data.name}</h3>
            <b>${data.price}</b>
            <p>Stock: {data.stock}</p>
            <Link to={`/product/${data.id}`}><button className='btn-comprar'>Comprar</button></Link>
        </div>
    )
}

