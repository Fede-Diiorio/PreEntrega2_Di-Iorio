import classes from './CartItem.module.scss'
import { FaTrashCan } from "react-icons/fa6";

const CartItem = ({ img, name, price, quantity }) => {

    return (
        <div className='container'>
            <div className={classes.container}>
                <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
                <h5>{name}</h5>
                <p><strong>Precio Unitario: </strong>{price}</p>
                <p><strong>Cantidad de Unidades: </strong>{quantity}</p>
                <p><strong>Subtotal: </strong>{price * quantity}</p>
                <button><FaTrashCan className={classes.icon} /></button>

            </div>
        </div>
    )
}

export default CartItem