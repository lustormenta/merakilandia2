import React, {useContext, useState} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import ContactModal from '../../components/ContactModal/ContactModal';
import './CartPage.css'

export default function CartPage() {
    const {theme} = useContext(ThemeContext)
    const { products, totalPrice } = useContext(CartContext)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={`final-cart ${theme ? 'theme-dark' : 'theme-light'}`}>
            <Container className='container-cart-page'>
                <Grid container xs={8}>
                    <Grid container spacing={2} className="header-cart">
                        <Grid item xs={8} >
                            <h3>Producto</h3>
                        </Grid>
                        <Grid item xs={2} >
                            <h3>Cantidad</h3>
                        </Grid>
                        <Grid item xs={2} >
                            <h3>Precio</h3>
                        </Grid>
                    </Grid>
                    {products.map((product) => {
                        return(
                            <Grid key={product.id} container spacing={2} className="body-cart item-cart-page">
                                <Grid item xs={2} >
                                    <img className="imgCart" src={`../assets/${product.image}`} alt="img" />
                                </Grid>
                                <Grid item xs={6} >
                                    <p className='product-name'>{product.name}</p>
                                </Grid>
                                <Grid item xs={2} >
                                    <p className='product-quantity'>{product.quantity}</p>
                                </Grid>
                                <Grid item xs={2} >
                                    <p className='product-price'>$ {product.price}</p>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container xs={4} className='grid-total-price'>
                    <div>
                        <p className='precios'>SUBTOTAL</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div>
                        <p className='precios'>TOTAL</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='cart-button' onClick={handleClickOpen}>COMPLETAR COMPRA</Button>
                </Grid>
            </Container>
            <ContactModal 
                open={open} 
                handleClose={handleClose} 
                products={products} 
                total={totalPrice}
            />
        </div>
    )
}