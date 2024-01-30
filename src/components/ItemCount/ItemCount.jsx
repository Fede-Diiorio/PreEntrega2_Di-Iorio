import { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import classes from './ItemCount.module.scss'

const ItemCount = ({ initial = 1, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.itemCount}>
                <button className={classes.button}><FaMinus className={classes.buttonIcon} onClick={decrement} /></button>

                <p>{quantity}</p>
                <button className={classes.button}><FaPlus className={classes.buttonIcon} onClick={increment} /></button>

            </div>
            <button className={classes.buttonAdd} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
        </div>

    )
}

export default ItemCount