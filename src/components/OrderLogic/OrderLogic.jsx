import { useEffect, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useNotification } from '../../Notification/NotificationService'
import OrderView from '../OrderView/OrderView'

const OrderLogic = ({ orderSnapshot }) => {
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
                console.log(orderDoc)

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
        <OrderView orderId={orderId} buyer={buyer} item={item} total={total} />
    )
}

export default OrderLogic