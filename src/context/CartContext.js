import { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProducts = (product) => {
        if (products.length === 0) {
            setProducts([...products, product])
        } else {
            products.map(producto => {
                if (producto.id === product.id) {
                    producto.quantity = producto.quantity + product.quantity
                    setProducts([...products])
                } else {
                    setProducts([...products, product])
                }
            })
        }
    console.log('PRODUCTOS', products)}

    const data = {
        products,
        addProducts
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext