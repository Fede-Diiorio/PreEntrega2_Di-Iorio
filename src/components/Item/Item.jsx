import classes from './Item.module.scss'
import Button from '../Button/Button'
import DollarToPesoPrice from '../DollarToPesoPrice/DollarToPesoPrice'


const Item = ({ name, img, price, stock }) => {
    return (
        <div className={classes.width}>
            <div className={classes.card}>
                <img src={img} className={classes.image} />
                <div className={classes.cardBody}>
                    <h4 className={classes.title}>{name}</h4>
                    <div className={classes.cardInfo}>
                        <p><strong>Precio: </strong>$ <DollarToPesoPrice price={price} /></p>
                        <p><strong>Stock: </strong>{stock}</p>
                    </div>
                    <Button>Ver Detalle</Button>
                </div>
            </div>
        </div>
    )
}

export default Item