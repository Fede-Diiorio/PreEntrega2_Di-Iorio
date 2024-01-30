import { db } from '../../services/firebase/firebaseConfig'
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'
import { useLocalStorage } from '../../LocalStorageContext/LocalStorageContext'
import { useState } from 'react'
import OrderLogic from '../OrderLogic/OrderLogic'
import OrderForm from '../OrderForm/OrderForm'
import classes from './Checkout.module.scss'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderSnapshot, setOrderSnapshot] = useState(null)
    const { clearCartFromLocalStorage } = useLocalStorage()
    const { cart, totalPrice, clearCart } = useCart()
    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: userData,
                item: cart,
                total: totalPrice
            }
            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot

            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                    console.log(outOfStock)
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderCollection = collection(db, 'orders')
                const orderSnapshot = await addDoc(orderCollection, objOrder)

                setOrderSnapshot(orderSnapshot)
                clearCart()
                clearCartFromLocalStorage()
            } else {
                showNotification('error', 'Hay productos sin stock disponible')
            }
        } catch (error) {
            showNotification('error', 'Hubo un al generar la orden')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h2>Se está generando su orden...</h2>
    }

    if (orderSnapshot) {
        return <OrderLogic orderSnapshot={orderSnapshot} />
    }

    return (
        <section>
            <h2>Checkout</h2>
            <div className={classes.container}>
                <OrderForm onCreate={createOrder} />
            </div>

        </section>
    )
}

export default Checkout