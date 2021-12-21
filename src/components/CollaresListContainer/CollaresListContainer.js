import React, {useEffect, useState} from 'react'
import './CollaresListContainer.css';
import Item from '../Item/Item.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const CollaresListContainer = () => {
    const [products, setProducts] = useState([])
    const dataProduct = [
        {
            id: 5,
            img: "./assets/collar1.jpg",
            name: 'Collar 1',
            price: 650,
            stock: 4
        },
        {
            id: 6,
            img: "./assets/collar2.jpg",
            name: 'Collar 2',
            price: 600,
            stock: 10
        },
        {
            id: 7,
            img: "./assets/collar3.jpg",
            name: "Collar 3",
            price: 560,
            stock: 8
        },
        {
            id: 8,
            img: "./assets/pregunta.jpg",
            name: 'Collar personalizado',
            price: 700,
            stock: 20
        }
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
            setProducts(data)
        })
    }, [])
    

        return ( 
        <>
            <h2>❀ Collares ❀</h2>
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

export default CollaresListContainer;