import classes from './CartItem.module.scss'
import { FaTrashCan } from "react-icons/fa6";
import { priceFormat } from '../../helpers/priceFormat';
import { useCart } from '../../context/CartContext';

const CartItem = ({ img, name, price, quantity, id }) => {

    const { removeItem } = useCart()

    return (
        <div className={classes.container}>
            <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
            <h5>{name}</h5>
            <p><strong>Precio Unitario: </strong>$ {priceFormat(price)}</p>
            <p><strong>Cantidad de Unidades: </strong>{quantity}</p>
            <p><strong>Subtotal: </strong>$ {priceFormat(price * quantity)}</p>
            <button onClick={() => removeItem(id)}><FaTrashCan className={classes.icon} /></button>

        </div>
    )
}

export default CartItem