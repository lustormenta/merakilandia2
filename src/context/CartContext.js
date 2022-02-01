import { createContext, useState, useEffect } from "react";

const CartContext = createContext();
const productsFromLocalStorage = JSON.parse(localStorage.getItem('products') || "[]")

const CartProvider = ({children}) => {
    const [products, setProducts] = useState(productsFromLocalStorage)
    const [totalPrice, setTotalPrice] = useState(0);

    const addProducts = (product) => {
        let exist = products.find(prod => prod.id === product.id)
        exist ?
        setProducts(products.map(
            prod=> prod.id === product.id ?
            {...exist, quantity: exist.quantity + product.quantity}
            :
            prod))
            :
            setProducts(carrito=> [...carrito, product]);
        localStorage.setItem('products', JSON.stringify(product))
    }

    const total = products.reduce((acc, el)=> acc + (el.quantity * el.price),0)

    const removeProducts = (item) => {
        setProducts(products.filter(x=> x.id !== item.id))
    }

    useEffect(() => {
        setTotalPrice(total)
        localStorage.setItem("products", JSON.stringify(products))
    }, [products]);
    

    const eliminarTodo = () => {
    setProducts([])
}

    const data = {
        products,
        addProducts,
        totalPrice,
        removeProducts,
        eliminarTodo,
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext