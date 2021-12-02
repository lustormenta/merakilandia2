import React,{useState} from 'react'


export default function Product() {

    const [clicks, setClicks] = useState('');

    const click = () => {
        setClicks('Compra exitosa!');
    };

    return(
        <div>
            <h1>
                {clicks}
            </h1>
            <button onClick={click}>Comprar</button>
        </div>
    );
}