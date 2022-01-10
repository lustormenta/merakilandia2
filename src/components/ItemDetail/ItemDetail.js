import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useContext } from 'react'
import CartContext from '../../context/CartContext';


export default function ItemDetail({ data }) {
    const [quantityItem, setQuantityItem] = useState(0)
    const { addProducts, products } = useContext(CartContext)
    //const [show, setShow] = useState(true)

    const onAdd = (value) => {  
        //setShow(false)
        addProducts (
        {
            name: data.name,
            id: data.id,
            price: data.price,
            image: data.img,
            quantity: value
        }
        )
        console.log('Hice click: ', products)
    }

    return (
        <>
            <div className='ItemDetail'>

                    <div className='ItemContenedor'>
                        <div className='left'>
                            <h2 className='productName'> {data.name}</h2>
                            <br/>
                                <img className='imagenDeProducto' src= {`../assets/${data.img}`} alt={data.name} width={300} height={300}></img>
                        </div>
                            <br/><br/>
                        <div className='right'>
                            <b>Precio : ${data.price}</b>
                            <br/>
                            <p>Stock: {data.stock}</p>
                            <ItemCount stock={data.stock} onAdd={onAdd}/>
                        </div>
                    </div>

            </div>
        </>
    )
}

