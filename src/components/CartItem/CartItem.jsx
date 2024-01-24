import React from 'react';
import classes from './CartItem.module.scss';
import { FaTrashCan } from 'react-icons/fa6';
import { priceFormat } from '../../helpers/priceFormat';
// import Swal from 'sweetalert2';
// import { useCart } from '../../context/CartContext';
// import { useNotification } from '../../notification/Notification';
import { useConfirmNotification } from '../../confirmNotification';

const CartItem = ({ img, name, price, quantity, id }) => {
    // const { removeItem } = useCart();
    // const { showNotification } = useNotification();

    // const handleDeleteConfirmation = () => {
    //     Swal.fire({
    //         title: '¿Estás seguro?',
    //         text: '¿Deseas eliminar este producto del carrito?',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         buttonsStyling: false,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Sí, eliminar',
    //         cancelButtonText: 'Cancelar',
    //         customClass: {
    //             confirmButton: 'button confirm',
    //             cancelButton: 'button cancel',
    //         },
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             handleDeleteItem();
    //         }
    //     });
    // };

    // const handleDeleteItem = () => {
    //     showNotification('success', 'Eliminado correctamente');
    //     removeItem(id);
    // };

    const { showConfirmNotification } = useConfirmNotification()

    return (
        <div className={classes.container}>
            <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
            <h5>{name}</h5>
            <p>
                <strong>Precio Unitario: </strong>$ {priceFormat(price)}
            </p>
            <p>
                <strong>Cantidad de Unidades: </strong>
                {quantity}
            </p>
            <p>
                <strong>Subtotal: </strong>$ {priceFormat(price * quantity)}
            </p>
            {/* <button onClick={handleDeleteConfirmation}>
                <FaTrashCan className={classes.icon} />
            </button> */}
            <button onClick={showConfirmNotification('warning', '¿Desea eliminar estre producto del carrito?', id)}>
                <FaTrashCan className={classes.icon} />
            </button>
        </div>
    );
};

export default CartItem;
