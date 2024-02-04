import Button from '../Button/Button'
import { useFormatPrice } from '../../hooks/useFormatPrice'
import OrderViewBuyer from '../OrderViewBuyer/OrderViewBuyer'
import OrderViewItem from '../OrderViewItem/OrderViewItem'
import classes from './OrderView.module.scss'
import { useTitle } from '../../hooks/useTitle'
import { useNotification } from '../../Notification/NotificationService'
import { orderData } from '../../services/firebase/firestore/order'
import { useAsync } from '../../hooks/useAsync'

const OrderView = ({ orderSnapshot }) => {

    useTitle(true, 'Plataforma 9 3/4 | Oden de Compra', [])

    const { showNotification } = useNotification()
    const { dollarFormatPrice } = useFormatPrice()

    const asyncFunction = () => orderData(orderSnapshot)
    const { data, loading, error } = useAsync(asyncFunction, [orderSnapshot])

    if (loading) {
        return <h2>Solo un momento mas...</h2>
    }

    if (error) {
        return showNotification('error', 'Error al generar la orden')
    }

    return (
        <div className="container">
            <div className={classes.container}>
                <h2>¡Gracias por comprar con nosotros!</h2>
                <p className={classes.order}>
                    el ID de su compra es: <strong>{data.id}</strong>
                </p>
                <div className={classes.orderData}>
                    <OrderViewBuyer buyer={data.buyer} />
                    <OrderViewItem item={data.item} />
                </div>
                <p className={classes.total}>Total de la compra: $ {dollarFormatPrice(data.total)}</p>
                <p>Pronto nos pondremos en contacto con usted</p>
                <Button to={'/'}>Volver al inicio</Button>
            </div>
        </div>
    )
}

export default OrderView