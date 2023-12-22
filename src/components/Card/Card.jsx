import classes from './Card.module.scss'
import Button from '../Button/Button'
import ItemCountButton from '../ItemCount/ItemCount'

const Card = ({ title, image }) => {
    return (
        <div className={classes.propiedades}>
            <div className="card">
                <img src={image} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Descripción del producto</p>
                    <ItemCountButton />
                    <Button label={"Agregar"} />
                </div>
            </div>
        </div>
    )
}

export default Card