import CartItem from "../CartItem/CartItem"
import { useCart } from "../../context/CartContext"
import Button from "../Button/Button"
import classes from './Cart.module.scss'
import DollarToPesoPrice from '../DollarToPesoPrice/DollarToPesoPrice'
import { priceFormat } from "../../helpers/priceFormat"

const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice } = useCart()

    if (totalQuantity === 0) {
        return (
            <div className={classes.container}>
                <h2>No tiene productos agregados</h2>
                <Button to='/'>Ver Productos</Button>
            </div>
        )
    }

    return (
        <div className='container'>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <div className={classes.nav}>
                <Button onClick={clearCart} className={classes.button}>Vaciar Carrito</Button>
                <div className={classes.priceContainer}>
                    <h4><strong>Total USD: </strong>$ {priceFormat(totalPrice)}</h4>
                    <h4><strong>Total ARS: </strong>$ <DollarToPesoPrice price={totalPrice} /></h4>
                </div>
            </div>
        </div>
    )

}

export default Cart