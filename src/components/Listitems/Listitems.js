import React, {useEffect, useState} from 'react'
import './Listitems.css';
import Item from '../Item/Item.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const Listitems = () => {
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: 1,
            img: "./assets/cocos.jpg",
            name: 'Aros de cocos',
            price: 500,
            stock: 10
        },
        {
            id: 2,
            img: "./assets/corazones.jpg",
            name: 'Aros de corazones rotos',
            price: 500,
            stock: 20
        },
        {
            id: 3,
            img: "./assets/polnareff.jpg",
            name: "Aros Polnareff JoJo's",
            price: 450,
            stock: 5
        },
        {
            id: 4,
            img: "./assets/pregunta.jpg",
            name: 'Aros personalizados',
            price: 500,
            stock: 20
        }
    ]


    const promesa1 = new Promise( (resolve, reject) => {
        //el resolve dice que es lo que 
        //debe hacer la promesa al ejecutarse
        setTimeout(() => {
            resolve(dataProducts)  
        }, 2000)
        
    })

    
    useEffect(() => {
        //llamamos a la promesa con el then
        promesa1.then((data) => {
            console.log('respuesta de promesa', data)
            setProducts(data)
            //ocultar loader
        })
    }, [])
    

        return ( 
        <>
            <h2> Productos en oferta </h2>
            {console.log("state products: ", products)}

            {
            products.map( (product) => {
                return(
                    console.log(product.name)
                )
            })}

            <Container className="product-container">
                <Grid container spacing={2}>
                    {products.map(product => {
                        return(
                            <Grid item xs={4} key={product.id}>
                                <Item stock={product.stock} img={product.img}/>
                            </Grid>
                        )
                    })}
            </Grid>
            </Container>
        </>
        )
    }

export default Listitems;