import CartItem from "../CartItem/CartItem"
import { useCart } from "../../context/CartContext"
import Button from "../Button/Button"
import classes from './CartView.module.scss'
import DollarToPesoPrice from '../../helpers/DollarToPesoPrice'
import { priceFormat } from "../../helpers/priceFormat"
import { useEffect } from "react"
import { useLocalStorage } from "../../LocalStorageContext/LocalStorageContext"
import TitleChange from "../TitleChange/TitelChange"
import Swal from "sweetalert2"

const CartView = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart()
    const { clearCartFromLocalStorage } = useLocalStorage()

    const handleClearCartConfirmation = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'button confirm',
                cancelButton: 'button cancel',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleClearCart()
            }
        });
    }

    const handleClearCart = () => {
        clearCart()
        clearCartFromLocalStorage()
    }

    useEffect(() => {
        document.title = 'Plataforma 9 3/4 | Carrito'
    }, [])

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
                <Button onClick={handleClearCartConfirmation} className={classes.button}>Vaciar Carrito</Button>
                <Button to={'/checkout'}>checkout</Button>
                <div className={classes.priceContainer}>
                    <h4><strong>Total USD: </strong>$ {priceFormat(totalPrice)}</h4>
                    <h4><strong>Total ARS: </strong>$ <DollarToPesoPrice price={totalPrice} /></h4>
                </div>
            </div>
            <TitleChange />
        </div>
    )
}

export default CartView