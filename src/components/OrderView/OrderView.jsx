import Button from '../Button/Button'
import DollarToPesoPrice from '../../helpers/DollarToPesoPrice'
import OrderViewBuyer from '../OrderViewBuyer/OrderViewBuyer'
import OrderViewItem from '../OrderViewItem/OrderViewItem'
import classes from './OrderView.module.scss'

const OrderView = ({ orderId, buyer, item, total }) => {
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