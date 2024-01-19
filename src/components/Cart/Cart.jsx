import CartItem from "../CartItem/CartItem"
import { useCart } from "../../context/CartContext"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import classes from './Cart.module.scss'

const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice } = useCart()

    if (totalQuantity === 0) {
        return (
            <div className={classes.container}>
                <h2>No tiene productos agregados</h2>
                <Link to='/'><Button>Ver Productos</Button></Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h3>{totalPrice}</h3>
            <Button onClick={clearCart}>Limpiar Carrito</Button>
        </div>
    )

}

export default Cart