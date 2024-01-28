import classes from './OrderView.module.scss'
import Button from '../Button/Button'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useNotification } from '../../Notification/NotificationService'

const OrderView = ({ orderId }) => {
    const [buyOrder, setBuyOrder] = useState(null)
    const { showNotification } = useNotification()

    useEffect(() => {
        const getDocument = async (orderId) => {
            const buyById = doc(db, 'orders', orderId)

            try {
                const documentSnapShot = await getDoc(buyById)
                if (documentSnapShot.exists()) {
                    console.log('Datos de la compra: ', documentSnapShot.data())
                } else {
                    console.log('El documento no existe')
                }
            } catch {
                showNotification('error', 'Error al generar el comprobante')
            }
        }
        getDocument(orderId)
    }, [])

    return (
        <div className="container">
            <div className={classes.container}>
                <h2>Gracias por comprar con nosotros</h2>
                <p className={classes.order}>el ID de su compra es: <strong>{orderId}</strong></p>
                <p>Pronto nos pondremos en contacto con usted</p>
                <Button to={'/'}>Volver al inicio</Button>
            </div>
        </div>
    )
}

export default OrderView