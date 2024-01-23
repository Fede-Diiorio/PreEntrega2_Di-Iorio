import classes from './CartItem.module.scss'
import { FaTrashCan } from "react-icons/fa6";
import { priceFormat } from '../../helpers/priceFormat';
import { useCart } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { useNotification } from '../../notification/Notification';

const CartItem = ({ img, name, price, quantity, id }) => {

    const { removeItem } = useCart()

    const { showNotification } = useNotification()

    return (
        <div className={classes.container}>
            <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
            <h5>{name}</h5>
            <p><strong>Precio Unitario: </strong>$ {priceFormat(price)}</p>
            <p><strong>Cantidad de Unidades: </strong>{quantity}</p>
            <p><strong>Subtotal: </strong>$ {priceFormat(price * quantity)}</p>
            <button onClick={() => Swal.fire({
                title: "¿Estás seguro?",
                text: "¿Deseas eiminar este producto del carrito?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
                customClass: {
                    confirmButton: 'button confirm',
                    cancelButton: 'button cancel'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    showNotification('success', 'Eliminado correctamente')
                    removeItem(id)
                }
            })}><FaTrashCan className={classes.icon} />
            </button>

        </div>
    )
}

export default CartItem