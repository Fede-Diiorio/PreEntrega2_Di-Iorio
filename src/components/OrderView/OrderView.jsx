import classes from './OrderView.module.scss'
import Button from '../Button/Button'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useNotification } from '../../Notification/NotificationService'

const OrderView = ({ orderId }) => {
    const [buyOrder, setBuyOrder] = useState(null)
    const [buyer, setBuyer] = useState(null)
    const [item, setItem] = useState(null)
    const [total, setTotal] = useState(null)
    const { showNotification } = useNotification()

    useEffect(() => {
        const getDocument = async (orderId) => {
            const buyById = doc(db, 'orders', orderId)

            try {
                const documentSnapShot = await getDoc(buyById)
                if (documentSnapShot.exists()) {
                    const orderData = documentSnapShot.data()
                    const { item, total, buyer } = orderData
                    setItem(item)
                    setBuyer(buyer)
                    setTotal(total)
                } else {
                    showNotification('error', 'Hubo un error al generar el comprobante')
                }
            } catch {
                showNotification('error', 'Error al generar el comprobante')
            }
        }
        setBuyOrder(getDocument(orderId))
    }, [])

    return (
        <div className="container">
            <div className={classes.container}>
                <h2>Gracias por comprar con nosotros</h2>
                <p className={classes.order}>el ID de su compra es: <strong>{orderId}</strong></p>
                {buyer && (
                    <div>
                        <h3>Datos del Comprador:</h3>
                        <p>Nombre: {buyer.name}</p>
                        <p>Teléfono: {buyer.phone}</p>
                        <p>Email: {buyer.email}</p>
                    </div>
                )}
                {item && (
                    <div>
                        <h3>Detalles de la Compra:</h3>
                        <ul>
                            {item.map((product) => (
                                <li key={product.id}>
                                    Producto: {product.name}, Cantidad: {product.quantity}, Precio Unitario: ${product.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {total && <p>Total de la compra: ${total}</p>}

                <p>Pronto nos pondremos en contacto con usted</p>
                <Button to={'/'}>Volver al inicio</Button>
            </div>
        </div>
    )
}

export default OrderView