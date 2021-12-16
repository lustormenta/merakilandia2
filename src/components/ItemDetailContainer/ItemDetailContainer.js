import react, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
    console.log("parametros por ruta", useParams())
    const [product, setProduct] = useState([])
    const { id } = useParams()
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
