import { useLocalStorage } from '../../LocalStorageContext/LocalStorageContext'
import { useCart } from '../../context/CartContext'
import DollarToPesoPrice from '../../helpers/DollarToPesoPrice'
import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.scss'

const ItemDetail = ({ id, name, img, description, stock, price }) => {
    const { addItem, getProductQuantity } = useCart()
    const { saveCartToLocalStorage } = useLocalStorage()

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            price,
            quantity,
            img
        }

        addItem(objProduct)
        saveCartToLocalStorage(objProduct)
    }

    const productQuantity = getProductQuantity(id)

    return (

        <div className={classes.card}>
            <img src={img} alt={`Imagen de ${name}`} className={classes.img} />
            <div className={classes.cardBody}>
                <h4 className={classes.cardTitle}>{name}</h4>
                <p className={classes.cardText}>{description}</p>
                <div className={classes.cardInfo}>
                    <p><strong>Precio: </strong><DollarToPesoPrice price={price} /></p>
                    <p><strong>Stock: </strong>{stock}</p>
                </div>
                <div className={classes.itemCount}>
                    {
                        <ItemCount stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
                    }
                </div>
            </div>
        </div>

    )
}

export default ItemDetail