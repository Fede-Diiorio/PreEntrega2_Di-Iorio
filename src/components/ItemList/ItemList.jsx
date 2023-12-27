import Item from '../Item/Item'
import classes from './ItemList.module.scss'

const ItemList = ({ products }) => {
    return (
        <div className={classes.display}>
            {
                products.map(prod => {
                    return (
                        <Item key={prod.id} {...prod} />
                    )
                })
            }
        </div>
    )
}

export default ItemList