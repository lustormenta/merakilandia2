import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react'

const ItemDetail = ({data}) => {
    const [quantityItem, setQuantityItem] = useState(0)
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
    
    const sendItem = () => {
        console.log('itemCart: ', itemCart)
    }
    return (
        <>
            <div className='ItemDetail'>
                <div className='ItemContenedor'>
                <div className='left'>
                    <h2 className='productName'> {data.name}</h2>
                    <br/>
                    <img className='imagenDeProducto' src= {`../${data.img}`} alt={data.name} width={300} height={300}></img>
                </div>
                <br/><br/>
                <div className='right'>
                <b>Precio : ${data.price}</b>
                <br/>
                <p>Stock: {data.stock}</p>
                <ItemCount stock={data.stock} onAdd={onAdd}/>
                <button onClick={sendItem} className='btn-Carrito'>Agregar al carrito</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
