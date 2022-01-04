import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import React, {useState, useEffect, useContext} from 'react'
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const [showCart, setShowCart] = useState(false)
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
                                <img src={`./src/${product.img}`} />
                            </div>
                            <p>nombre: {product.name}</p>
                            <p> precio: ${product.price}</p>
                            <span className='span'>Cant: {product.quantity}</span>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartWidget;