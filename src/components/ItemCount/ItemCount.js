import './ItemCount.css';
import React,{ useState, useContext } from 'react'
import Button from '@mui/material/Button';
import ThemeContext from "../../context/ThemeContext";


export default function ItemCount({stock, onAdd}) {
    const {theme} = useContext(ThemeContext)
    const [clicks, setClicks] = useState(0)

    const more = () => {
        if(clicks < stock) {
            setClicks(clicks + 1)
        }
    }
    const less = () => {
        if (clicks > 0) {
            setClicks(clicks - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(clicks)
    }

    return(
        <div id='mas-menos' className={theme ? 'theme-dark' : 'theme-light'}>
        <div id="contador" className='item-count__buttons' >
            <Button variant='outlined' className='botonMasMenos' onClick={less}>-</Button>
            <p>{clicks}</p>
            <Button variant='outlined' className='botonMasMenos' onClick={more}>+</Button>
        </div>
        <button className='btn-Carrito' onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
    );

}