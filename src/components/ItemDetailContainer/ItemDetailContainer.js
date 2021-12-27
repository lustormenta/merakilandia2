import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    console.log("parametros por ruta ", useParams())
    const { id } = useParams()
    
    const dataProducts = [
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
            id: 4,
            img: "./assets/pregunta.jpg",
            name: 'Aros personalizados',
            price: 500,
            stock: 20,
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
        }
    ]
        
    
        const getProduct = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(dataProducts)  
            }, 0)
            
        })
    
        
        useEffect(() => {
            //llamamos a la promesa con el then
            getProduct.then(resultProduct => {
                resultProduct.filter(resultProduct => {
                    if (resultProduct.id === parseInt(id)) {
                        setProduct(resultProduct)
                    }
                })
            })
        }, [])
        

        return (
            <div>
                <ItemDetail data={product}/>
            </div>
        )
}
