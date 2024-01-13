import DollarToPesoPrice from '../DollarToPesoPrice/DollarToPesoPrice'
import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.scss'

const ItemDetail = ({ id, name, img, description, stock, price }) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            price,
            quantity
        }

        console.log('Se agregó correctamente: ', objProduct)
    }

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
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>

    )
}

export default ItemDetail