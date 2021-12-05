import './ItemCount.css';
import React,{useState, useEffect} from 'react'


export default function Product() {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        console.log('Ejecuta useEffect')
    })

    const more = () => {
        setClicks(clicks + 1);
    };
    const less = () => {
        setClicks(clicks - 1);
    }

    return(
        <div id="contador" >
            {console.log('Render')}
            <button onClick={less}>Quitar</button>
            <h4>
                {clicks}
            </h4>
            <button onClick={more}>Agregar</button>
        </div>
    );
}