import './Item.css';
import Product from '../Product/Product'
import ItemCount from '../ItemCount/ItemCount'



const Item = ({img, name, price, stock}) => {
    return(
        //JSX
        <div>
            <img src= {img} alt={name} width="300" height="300"/>
            <h3>{name}</h3>
            
            <p>Stock: {stock}</p>
            <ItemCount />
            <Product />

        </div>
    )
}

export default Item;