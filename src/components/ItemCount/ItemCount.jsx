import classes from './ItemCount.module.scss'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ItemCount = () => {

    const [count, setCount] = useState(1)

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < 100) {
            setCount(count + 1)
        }
    }

    return (
        <div className={classes.container}>
            <FaMinus className={classes.button} onClick={decrement} />
            <p>{count}</p>
            <FaPlus className={classes.button} onClick={increment} />
        </div>
    )
}

export default ItemCount