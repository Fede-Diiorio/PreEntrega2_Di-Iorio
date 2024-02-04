import Button from '../Button/Button'
import { useFormatPrice } from '../../hooks/useFormatPrice'
import classes from './Item.module.scss'

const Item = ({ id, name, img, price, stock }) => {

    const { dollarFormatPrice } = useFormatPrice()

    return (
        <div className={classes.width}>
            <div className={classes.card}>
                <img src={img} alt={`Imagen de ${name}`} className={classes.image} />
                <div className={classes.cardBody}>
                    <h4 className={classes.title}>{name}</h4>
                    <div className={classes.cardInfo}>
                        <p><strong>Precio: </strong>$ {dollarFormatPrice(price)}</p>
                        <p><strong>Stock: </strong>{stock}</p>
                    </div>
                    <Button to={`/detail/${id}`}>Ver Detalle</Button>
                </div>
            </div>
        </div>
    )
}

export default Item