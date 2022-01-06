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

    const removeProducts = (item) => {
            // const productoEliminado = products.filter(prod => {
            //     prod.id !== item.id
            // })
            const found = products.filter (x=> x.id !== item.id)
            setProducts(found)
            console.log('hola')
        }

    const eliminarTodo = () => {
        setProducts([])
    }

    const data = {
        products,
        addProducts,
        removeProducts,
        eliminarTodo
    }

    

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext
export const removeProducts = true