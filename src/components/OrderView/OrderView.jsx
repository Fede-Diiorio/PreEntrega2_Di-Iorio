import { useEffect, useState } from 'react'
import classes from './OrderView.module.scss'
import Button from '../Button/Button'
import { db } from '../../services/firebase/firebaseConfig'
import { collection, doc, getDoc, query, where } from 'firebase/firestore'
import DollarToPesoPrice from '../../helpers/DollarToPesoPrice'
import { useNotification } from '../../Notification/NotificationService'
import OrderViewBuyer from '../OrderViewBuyer/OrderViewBuyer'
import OrderViewItem from '../OrderViewItem/OrderViewItem'

const OrderView = ({ orderSnapshot }) => {
    const [buyer, setBuyer] = useState(null)
    const [item, setItem] = useState(null)
    const [total, setTotal] = useState(null)
    const { showNotification } = useNotification()
    const [orderId, setOrderId] = useState(null)

    useEffect(() => {
        const orderId = orderSnapshot.id
        setOrderId(orderId)

        const fetchData = async () => {
            try {
                const orderRef = doc(db, 'orders', orderId)
                const orderDoc = await getDoc(orderRef)

                if (orderDoc.exists()) {
                    const orderData = orderDoc.data()
                    setBuyer(orderData.buyer)
                    setItem(orderData.item)
                    setTotal(orderData.total)
                } else {
                    showNotification('error', 'La orden no existe')
                }
            } catch (error) {
                showNotification('error', 'Error al obtener la información de la orden')
            }
        }
        fetchData()
    }, [orderSnapshot, showNotification])

    return (
        <div className="container">
            <div className={classes.container}>
                <h2>¡Gracias por comprar con nosotros!</h2>
                <p className={classes.order}>
                    el ID de su compra es: <strong>{orderId}</strong>
                </p>
                <div className={classes.orderData}>
                    {buyer && (<OrderViewBuyer buyer={buyer} />)}
                    {item && (<OrderViewItem item={item} />)}
                </div>
                {total && <p className={classes.total}>Total de la compra: ${<DollarToPesoPrice price={total} />}</p>}
                <p>Pronto nos pondremos en contacto con usted</p>
                <Button to={'/'}>Volver al inicio</Button>
            </div>
        </div>
    )
}

export default OrderView