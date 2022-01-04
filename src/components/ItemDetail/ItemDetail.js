import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useContext } from 'react'
import CartContext from '../../context/CartContext';


export default function ItemDetail({ data }) {
    const [quantityItem, setQuantityItem] = useState(0)
    const { addProducts, products } = useContext(CartContext)
    const [show, setShow] = useState(true)
    const [itemCart, setItemCart]= useState(
        {
            name: data.name,
            id: data.id,
            price: data.price,
            image: data.img,
            quantity: 0
        }
    )
    

    const onAdd = (value, name) => {
        itemCart.quantity = value
        addProducts({
            name: data.name,
            id: data.id,
            price: data.price,
            image: data.img,
            quantity: value
        })
        //setShow(false)
        console.log(name)
    }
    
    const sendItem = () => {
        onAdd()
        console.log('productos agregados: ', products)
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
                            <button className='btn-Carrito' onClick={sendItem}>Agregar al Carrito</button>
                        </div>
                    </div>

            </div>
        </>
    )
}

