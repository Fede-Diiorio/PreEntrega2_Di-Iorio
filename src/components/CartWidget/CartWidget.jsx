import { FiShoppingCart } from "react-icons/fi";
import classes from "./CartWidget.module.scss"
import { useCart } from '../../context/CartContext'

const Cart = () => {

    const { totalQuantity } = useCart()

    return (
        <div className={classes.container}>
            <FiShoppingCart className={classes.cart} />
            <p>{totalQuantity}</p>
        </div>
    )
}

export default Cart