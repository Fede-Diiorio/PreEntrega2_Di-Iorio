import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.scss'
import { mostrarNumeroConComas } from '../../helpers/numeroConComas'

const ItemDetail = ({ name, img, description, stock, price }) => {
    return (

        <div className={classes.card}>
            <img src={img} alt={`Imagen de ${name}`} className={classes.img} />
            <div className={classes.cardBody}>
                <h4 className={classes.cardTitle}>{name}</h4>
                <p className={classes.cardText}>{description}</p>
                <div className={classes.cardInfo}>
                    <p><strong>Precio: </strong>$ {mostrarNumeroConComas(price)}</p>
                    <p><strong>Stock: </strong>{stock}</p>
                </div>
                <div className={classes.itemCount}>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada: ', quantity)} />
                </div>
            </div>
        </div>

    )
}

export default ItemDetail