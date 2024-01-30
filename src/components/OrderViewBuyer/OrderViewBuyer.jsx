import classes from './OrderViewBuyer.module.scss'

const OrderViewBuyer = ({ buyer }) => {

    const { name, phone, email } = buyer

    return (
        <div className={classes.buyer}>
            <h3>Datos del Comprador:</h3>
            <p>Nombre: {name}</p>
            <p>Teléfono: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default OrderViewBuyer