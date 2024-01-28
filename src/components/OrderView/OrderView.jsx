import classes from './OrderView.module.scss'
import Button from '../Button/Button'

const OrderView = ({ orderId }) => {
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