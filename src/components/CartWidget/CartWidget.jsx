import { FiShoppingCart } from "react-icons/fi";
import classes from "./CartWidget.module.scss"

const Cart = () => {
    return (
        <div className={classes.container}>
            <FiShoppingCart className={classes.cart} />
            <p>0</p>
        </div>
    )
}

export default Cart