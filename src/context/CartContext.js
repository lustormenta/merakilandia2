import { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProducts = (product) => {

        products.map(product => {
            if (products.hasOwnProperty(product.id)) {
                product.quantity = addProducts[product.id].quantity + 1
            }
        })

            setProducts([...products, product])
            console.log('PRODUCTOS', products)
    }


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