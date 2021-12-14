import react, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


export default function ContainerItemDetail() {

    const [product, setProduct] = useState([])
    const dataProduct = {
            id: 1,
            img: "./assets/cocos.jpg",
            name: 'Aros de cocos',
            price: 500,
            stock: 10
            }
        
    
        const getProduct = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(dataProduct)  
            }, 2000)
            
        })
    
        
        useEffect(() => {
            //llamamos a la promesa con el then
            getProduct.then(data => {
                console.log('respuesta de promesa', data)
                setProduct(data)
            })
        }, [])
        

    return (
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}