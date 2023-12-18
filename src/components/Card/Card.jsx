import classes from './Card.module.scss'
import Button from '../Button/Button'
import ItemCountButton from '../ItemCount/ItemCount'

const Card = (props) => {
    return (
        <div className={classes.propiedades}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Descripción del producto</p>
                    <div className={classes.buttonCount}>
                        <Button label={"Agregar"} />
                        <ItemCountButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card