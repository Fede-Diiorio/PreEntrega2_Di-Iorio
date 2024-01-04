import classes from './ItemCount.module.scss'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > initial) {
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
                <FaMinus className={classes.button} onClick={decrement} />
                <p>{quantity}</p>
                <FaPlus className={classes.button} onClick={increment} />
            </div>
            <button className={classes.buttonAdd} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
        </div>

    )
}

export default ItemCount