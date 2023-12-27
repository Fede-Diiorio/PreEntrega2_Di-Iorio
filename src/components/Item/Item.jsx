import classes from './Item.module.scss'
import ItemCount from '../ItemCount/ItemCount'
import Button from '../Button/Button'

const Card = ({ name, img, description }) => {
    return (
        <div className={classes.prop}>
            <div className="card">
                <img src={img} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <ItemCount />
                    <Button label={"Agregar"} />
                </div>
            </div>
        </div>
    )
}

export default Card