//Hooks
import {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
//Components
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
//Firebase
import { doc, getDoc } from 'firebase/firestore'
import db from '../../firebase'

// Context
import ThemeContext from '../../context/ThemeContext'


export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const {theme} = useContext(ThemeContext)

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
            <div className={`item-detail-container ${theme ? 'theme-dark' : 'theme-light'}`}>
                <ItemDetail data={product}/>
            </div>
        )
}
