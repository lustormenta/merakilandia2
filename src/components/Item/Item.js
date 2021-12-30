import './Item.css';
import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'



export default function Item({data}) {
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
        <div>
            <img src= {data.img} alt={data.name} width="300" height="300"/>
            <h3>{data.name}</h3>
            <b>${data.price}</b>
            <p>Stock: {data.stock}</p>
            <Link to={`/product/${data.id}`}><button className='btn-comprar'>Comprar</button></Link>
        </div>
    )
}

