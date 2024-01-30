import { useCart } from '../../context/CartContext'
import { FiShoppingCart } from "react-icons/fi";
import Button from "../Button/Button";
import classes from "./CartWidget.module.scss"

const Cart = () => {

    const { totalQuantity } = useCart()

    return (
        <Button to='/cart'><div className={classes.container}>
            <FiShoppingCart className={classes.cart} />
            <p>{totalQuantity}</p></div>
        </Button>

    )
}

export default Cart