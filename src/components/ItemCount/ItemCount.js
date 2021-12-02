import './ItemCount.css';
import React,{useState} from 'react'


export default function Product() {

    const [clicks, setClicks] = useState(0);

    const more = () => {
        setClicks(clicks + 1);
    };

    const less = () => {
        setClicks(clicks - 1);
    }

    return(
        <div id="contador" >
            <button onClick={less}>Quitar</button>
            <h4>
                {clicks}
            </h4>
            <button onClick={more}>Agregar</button>
        </div>
    );
}