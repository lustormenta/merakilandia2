import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import React, {useState, useEffect, useContext} from 'react'
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const [showCart, setShowCart] = useState(false)
    const {removeProducts, eliminarTodo} = useContext(CartContext)

    useEffect(() => {
        console.log('products CartWidget ', products)
    })
    const {products} = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    return(
        <div className="cart-container">
            <ShoppingCartIcon onClick={openCart}/>
            <div className={`box-cart ${showCart && 'active'}`}>
                    {products.map((product) => {
                        return(
                            <div className='item-cart-list'>
                                <div className='item-cart-img'>
                                    <img src={`../${product.img}`} />
                                </div>
                                <p>nombre: {product.name}</p>
                                <p> precio: ${product.price}</p>
                                <span className='span'>Cant: {product.quantity}</span>
                                <removeProducts />
                                <button className='btn-remove' onClick={()=> removeProducts(product) } >Eliminar</button>
                                <hr></hr>
                                <button onClick={() => eliminarTodo() }>Eliminar todo</button>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default CartWidget;