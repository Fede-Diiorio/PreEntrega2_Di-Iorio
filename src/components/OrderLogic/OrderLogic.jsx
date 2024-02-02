import { useEffect, useState } from 'react'
import { useNotification } from '../../Notification/NotificationService'
import OrderView from '../OrderView/OrderView'
import { orderData } from '../../services/firebase/firestore/products'

const OrderLogic = ({ orderSnapshot }) => {
    const [buyer, setBuyer] = useState(null)
    const [item, setItem] = useState(null)
    const [total, setTotal] = useState(null)
    const { showNotification } = useNotification()
    const [orderId, setOrderId] = useState(null)


    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const result = await orderData(orderSnapshot);
                setBuyer(result.buyer);
                setItem(result.item)
                setTotal(result.total)
                setOrderId(result.orderId)
            } catch (error) {
                showNotification('error', 'Error al generar la orden')
            }
        };

        fetchOrderData();
    }, [orderSnapshot]);

    return (
        <OrderView orderId={orderId} buyer={buyer} item={item} total={total} />
    )
}

export default OrderLogic