import cart from "./assets/cart.svg"
import classes from "./CartWidget.module.scss"

const Cart = () => {
    return (
        <div className={classes.contenedor}>
            <img className={classes.cart} src={cart} alt="Imagen del carrito" />
            <p>0</p>
        </div>
    )
}

export default Cart