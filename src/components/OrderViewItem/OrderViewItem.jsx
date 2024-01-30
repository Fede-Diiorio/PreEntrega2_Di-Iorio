import classes from './OrderViewItem.module.scss'

const OrderViewItem = ({ item }) => {
    return (
        <div className={classes.item}>
            <h3>Detalles de la Compra:</h3>
            <ul>
                {item.map((product) => (
                    <li key={product.id}>
                        Producto: {product.name}, Cantidad: {product.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OrderViewItem