import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import { Link } from 'react-router-dom'
const CartWidget = () => {
    return(
        <div className="cart-container">
            <Link to='/cart'><ShoppingCartIcon /></Link>
        </div>
    )
}

export default CartWidget;