import { db } from '../../services/firebase/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNotification } from '../../Notification/NotificationService'
import OrderView from '../OrderView/OrderView'
import { orderData } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

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

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const result = await orderData(orderSnapshot);
                console.log(result);
            } catch (error) {
                console.error("Error fetching order data:", error);
            }
        };

        fetchOrderData();
    }, [orderSnapshot]);

    return (
        <OrderView orderId={orderId} buyer={buyer} item={item} total={total} />
    )
}

export default OrderLogic