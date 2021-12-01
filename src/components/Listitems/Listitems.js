import './Listitems.css';
import Item from '../Listitems/Item/Item.js';
import Test from '../Test/Test.js';

//Functional component (recomended)


const Listitems = () => {
    const dataProducts = [
        {
            img: "./assets/cocos.jpg",
            name: 'Aros de cocos',
            price: 500,
            stock: 10
        },
        {
            img: "./assets/corazones.jpg",
            name: 'Aros de corazones rotos',
            price: 500,
            stock: 20
        },
        {
            img: "./assets/polnareff.jpg",
            name: "Aros Polnareff JoJo's",
            price: 450,
            stock: 5
        },
        {
            img: "./assets/pregunta.jpg",
            name: 'Aros personalizados',
            price: 500,
            stock: 'Siempre disponible'
        }
    ]
    return(
        <>
            <h2>Productos en oferta</h2>
            {dataProducts.map((product) => {
                return(
                    <Item img={product.img} name={product.name} price={product.price} stock={product.stock} />
                )
            })}

            <h1 className="tituloTest">Ejemplo children</h1>
            <Test>
                <p>Texto desde padre</p>
            </Test>
        </>
    )
}

export default Listitems;


