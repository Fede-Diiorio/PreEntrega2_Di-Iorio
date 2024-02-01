import { useCart } from "../../context/CartContext"
import { useLocalStorage } from "../../LocalStorageContext/LocalStorageContext"
import { useNotification } from "../../Notification/NotificationService"
import { priceFormat } from "../../helpers/priceFormat"
import DollarToPesoPrice from '../../helpers/DollarToPesoPrice'
import CartItem from "../CartItem/CartItem"
import Button from "../Button/Button"
import classes from './CartView.module.scss'
import { useTitle } from "../../hooks/useTitle"

const CartView = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart()
    const { clearCartFromLocalStorage } = useLocalStorage()
    const { showConfirmation } = useNotification()

    const handleClearCart = () => {
        clearCart()
        clearCartFromLocalStorage()
    }

    const handleClearCartConfirmation = () => {
        showConfirmation({
            text: '¿Deseas vaciar el carrito?',
            confirmButton: 'Sí, vaciar',
            addAction: handleClearCart
        })
    }

    useTitle(cart, 'Plataforma 9 3/4 | Carrito', [cart]);

    if (totalQuantity === 0) {
        return (
            <section className={classes.container}>
                <h2>No tiene productos agregados</h2>
                <Button to='/'>Ver Productos</Button>
            </section>
        )
    }

    return (
        <section className='container'>
            <h2>Productos agregados</h2>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <div className={classes.nav}>
                <Button onClick={handleClearCartConfirmation} className={classes.button}>Vaciar Carrito</Button>
                <Button to={'/checkout'}>checkout</Button>
                <div className={classes.priceContainer}>
                    <h4><strong>Total USD: </strong>$ {priceFormat(totalPrice)}</h4>
                    <h4><strong>Total ARS: </strong>$ <DollarToPesoPrice price={totalPrice} /></h4>
                </div>
            </div>
        </section>
    )
}

export default CartView