import Button from '../Button/Button'
import DollarToPesoPrice from '../../helpers/DollarToPesoPrice'
import OrderViewBuyer from '../OrderViewBuyer/OrderViewBuyer'
import OrderViewItem from '../OrderViewItem/OrderViewItem'
import classes from './OrderView.module.scss'
import { useTitle } from '../../hooks/useTitle'
import { useEffect, useState } from 'react'
import { useNotification } from '../../Notification/NotificationService'
import { orderData } from '../../services/firebase/firestore/products'

const OrderView = ({ orderSnapshot }) => {

    useTitle(true, 'Plataforma 9 3/4 | Oden de Compra', [])

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