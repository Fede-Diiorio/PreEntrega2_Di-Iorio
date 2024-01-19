import { FiShoppingCart } from "react-icons/fi";
import classes from "./CartWidget.module.scss"
import { useCart } from '../../context/CartContext'
import { Link } from "react-router-dom";

const Cart = () => {

    const { totalQuantity } = useCart()

    return (
        <Link className={classes.link} to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <div className={classes.container}>
                <FiShoppingCart className={classes.cart} />
                <p>{totalQuantity}</p>
            </div>
        </Link>
    )
}

export default Cart