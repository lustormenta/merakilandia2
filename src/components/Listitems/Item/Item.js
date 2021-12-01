import './Item.css';
import { ListItemSecondaryAction } from '@mui/material';
import Button from '@mui/material/Button';

const Item = ({img, name, price, stock}) => {
    return(
        //JSX
        <div>
            <img src= {img} alt={name} width="300" height="300"/>
            <h3>{name}</h3>
            <b>Precio: ${price}</b>
            <p>Stock: {stock}</p>
            <Button variant="outlined">Comprar</Button>
            <hr></hr>
        </div>
    )
}

export default Item;