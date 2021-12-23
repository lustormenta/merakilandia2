import './Item.css';
import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'



export default function Item ({data}) {
    
    return(
        //JSX
        <div>
            <img src= {data.img} alt={data.name} width="300" height="300"/>
            <h3>{data.name}</h3>
            <b>${data.price}</b>
            <p>Stock: {data.stock}</p>
            <ItemCount stock={data.stock}/>
            <Link to={`/products/${data.id}`}><button className='btn-comprar'>Comprar</button></Link>
        </div>
    )
}

