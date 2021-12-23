import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => {
    console.log('Producto filtrado', data)
    return (
        <>
            <div className='ItemDetail'>
                <div className='ItemContenedor'>
                <div className='left'>
                    <h2 className='productName'> {data.name}</h2>
                    <br/>
                    <img className='imagenDeProducto' src= {`../${data.img}`} alt={data.name} width={300} height={300}></img>
                </div>
                <br/><br/>
                <div className='right'>
                <b>Precio : ${data.price}</b>
                <br/>
                <p>Stock: {data.stock} </p>
                <ItemCount stock={data.stock}/>
                <button className='btn-Carrito'>Agregar al carrito</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
