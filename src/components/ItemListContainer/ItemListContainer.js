//Hooks
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
//Components
import './ItemListContainer.css';
import Item from '../Item/Item.js';
import ThemeContext from '../../context/ThemeContext';
//Material Ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//Firebase
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
    const {theme} = useContext(ThemeContext)
    const [products, setProducts] = useState([])
    const { category } = useParams()
    const [loaded, setLoaded] = useState(true)

    async function productos()  {
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        });
        return productsList;
    }
        
        useEffect(() => {
            productos(db).then(data => {
                if( !category ) {
                    setProducts(data)
                }
                if( category === 'aros' ) {
                    const productosFiltrados= data.filter(unProducto=> unProducto.category==='aros')
                    setProducts(productosFiltrados)
                }
                if( category === 'collares') {
                    const productosFiltrados = data.filter(unProducto => unProducto.category === 'collares')
                    setProducts(productosFiltrados)
                }
            })
        }, [])

        useEffect(() => {
            setTimeout(() => {
                setLoaded(false);
            }, 1000)  
        }, []);

    return ( 
        <div id='products' className={theme ? 'theme-dark' : 'theme-light'}>
            {loaded ? <h2 className='loading'>ʕ•́ᴥ•̀ʔっCargando...</h2> : <h2 className='subtitulo'> ❀ Nuestros productos ❀ </h2>}
            <Container className="product-container">
                <Grid container spacing={2}>
                    {products.map(product => {
                        return(
                            <Grid item xs={4} key={product.id}>
                                <Item data={product}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default ItemListContainer;


