import react from 'react'
import './ItemDetail.css'

export default function ItemDetail({data}) {
    return (
        <>
            <div className='ItemDetail'>
                <div className='ItemContenedor'>
                <h2> {data.name}</h2>
                <br/>
                <img src= {data.img} width={300} height={300}></img>
                <br/><br/>
                <b>Precio : ${data.price}</b>
                <br/>
                <p>Stock :<p > {data.stock} </p></p>
                <button className='btn-Carrito'>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

