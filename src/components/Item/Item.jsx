import classes from './Item.module.scss'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ name, img, description, stock }) => {
    return (
        <div className={classes.prop}>
            <div className="card">
                <img src={img} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <ItemCount initial={1} stock={stock} />
                </div>
            </div>
        </div>
    )
}

export default Item