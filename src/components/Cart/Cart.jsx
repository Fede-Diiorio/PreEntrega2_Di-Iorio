import CartItem from "../CartItem/CartItem"
import { useCart } from "../../context/CartContext"
import Button from "../Button/Button"
import classes from './Cart.module.scss'
import DollarToPesoPrice from '../DollarToPesoPrice/DollarToPesoPrice'
import { priceFormat } from "../../helpers/priceFormat"
import { useEffect } from "react"

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart()

    useEffect(() => {
        document.title = 'Plataforma 9 3/4 | Carrito'
    })

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
            <h2>Productos agregados</h2>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <div className={classes.nav}>
                <Button onClick={clearCart} className={classes.button}>Vaciar Carrito</Button>
                <Button to={'/checkout'}>Checkout</Button>
                <div className={classes.priceContainer}>
                    <h4><strong>Total USD: </strong>$ {priceFormat(totalPrice)}</h4>
                    <h4><strong>Total ARS: </strong>$ <DollarToPesoPrice price={totalPrice} /></h4>
                </div>
            </div>
        </div>
    )

}

export default Cart