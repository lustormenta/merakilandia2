import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import './ModalCart.css'
import CartContext from '../../context/CartContext';
import CloseIcon from '@mui/icons-material/Close';

export default function ModalCart({products}) {
    
    const {removeProducts, eliminarTodo, totalPrice} = useContext(CartContext)

    return(
        <div className={`box-cart active`}>
                {products.length === 0 ? (
                    <h2 className='cartVacio'>No hay productos agregados</h2>
                    ) : (
                    <>
                        {products.map((product) => {
                            return(
                                <div className='item-cart-list' key={product.id}>
                                    <div className='item-cart-img'>
                                        <img src={`../assets/${product.image}`} />
                                    </div>
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                    <span>Cant: {product.quantity}</span>
                                    <CloseIcon className='btn-remove' onClick={()=> removeProducts(product) } >X</CloseIcon>
                                    <hr></hr>
                                </div>
                            )
                        })}
                        <div className='container-finish-buy'>
                            <p>Total: $&nbsp;{totalPrice}</p>
                            <Button onClick={() => eliminarTodo() }>Eliminar todo</Button>
                            <Link to='/cart' className='potate'>
                                <Button>FINALIZAR COMPRA</Button>
                            </Link>
                        </div>
                    </>
                ) }
            </div>
    )    
}