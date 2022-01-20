import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const productsFromLocalStorage = JSON.parse(localStorage.getItem('productos' || "[]"))

const CartProvider = ({children}) => {
    const [products, setProducts] = useState(productsFromLocalStorage)
    const [totalPrice, setTotalPrice] = useState(0)

    const addProducts = (product) => {
        setProducts([...products, product])
        addProductStorage(product)
        setTotalPrice(totalPrice + product.price * product.quantity)
    }

    const total = products.reduce((acc,el)=>acc+(el.price * el.quantity),0)


    const addProductStorage = (product) => {
        localStorage.setItem("productos", JSON.stringify([...products, product]))
    }

    const removeProducts = (item) => {
        setProducts(products.filter(x=> x.id !== item.id))
    }

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
        setTotalPrice(total)
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
        total
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext