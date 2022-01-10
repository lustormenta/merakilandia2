//Hooks
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
//Componentes
import ItemDetail from '../ItemDetail/ItemDetail'
//Firebase
import { doc, getDoc } from 'firebase/firestore'
import db from '../../firebase'

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const { id } = useParams()

        async function productos(db)  {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let producto = docSnap.data();
                producto.id = docSnap.id
                setProduct(producto) 
            } else {
                console.log("No such document!");
            }
        }
    
        useEffect(() => {
            productos(db)
        }, [id])

        return (
            <div>
                <ItemDetail data={product}/>
            </div>
        )
}
