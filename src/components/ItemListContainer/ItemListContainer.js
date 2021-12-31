import React, {useEffect, useState} from 'react'
import './ItemListContainer.css';
import Item from '../Item/Item.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    const dataProduct = [
        {
            id: 1,
            img: "./assets/cocos.jpg",
            name: 'Aros de cocos',
            price: 500,
            stock: 10,
            category: 'aros'
        },
        {
            id: 2,
            img: "./assets/corazones.jpg",
            name: 'Aros de corazones rotos',
            price: 500,
            stock: 20,
            category: 'aros'
        },
        {
            id: 3,
            img: "./assets/polnareff.jpg",
            name: "Aros Polnareff JoJo's",
            price: 450,
            stock: 5,
            category: 'aros'
        },
        {
            id: 5,
            img: "./assets/collar1.jpg",
            name: 'Collar 1',
            price: 650,
            stock: 4,
            category: 'collares'
        },
        {
            id: 6,
            img: "./assets/collar2.jpg",
            name: 'Collar 2',
            price: 600,
            stock: 10,
            category: 'collares'
        },
        {
            id: 7,
            img: "./assets/collar3.jpg",
            name: "Collar 3",
            price: 560,
            stock: 8,
            category: 'collares'
        },
        {
            id: 8,
            img: "./assets/pregunta.jpg",
            name: 'Collar personalizado',
            price: 700,
            stock: 20,
            category: 'collares'
        },
        {
            id: 4,
            img: "./assets/pregunta.jpg",
            name: 'Aros personalizados',
            price: 500,
            stock: 20,
            category: 'aros'
        },
        
    ]


    const promesa1 = new Promise( (resolve, reject) => {
        //el resolve dice que es lo que 
        //debe hacer la promesa al ejecutarse
        setTimeout(() => {
            resolve(dataProduct)  
        }, 2000)
        
    })

    
    useEffect(() => {
        //llamamos a la promesa con el then
        promesa1.then((data) => {
            console.log('respuesta de promesa', data)
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
    

        return ( 
        <>
            <h2 className='subtitulo'> ❀ Nuestros productos ❀ </h2>
            {console.log("state products: ", products)}
            
            {
            products.map( (product) => {
                return(
                    console.log(product.name)
                )
            })}

        <Container className="product-container">

            {
                <Grid container spacing={2}>
                    {products.map(product => {
                        return(
                            <Grid item xs={4} key={product.id}>
                                <Item data={product}/>
                            </Grid>
                        )
                })}
                </Grid>
            }
        </Container>
        </>
        )
    }

export default ItemListContainer;