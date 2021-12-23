import './ItemCount.css';
import React,{ useState } from 'react'
import Button from '@mui/material/Button';


export default function ItemCount({stock, addItem}) {
    const [clicks, setClicks] = useState(0)

    const more = () => {
        if(clicks < stock) {
            setClicks(clicks + 1)
    }
    }
    const less = () => {
        clicks > 0 && setClicks(clicks - 1)
    }

    return(
        <div id="contador" className='item-count__buttons' >
            <Button variant='outlined' className='botonMasMenos' onClick={less}>-</Button>
            <p>{clicks}</p>
            <Button variant='outlined' className='botonMasMenos' onClick={more}>+</Button>
        </div>
    );
}