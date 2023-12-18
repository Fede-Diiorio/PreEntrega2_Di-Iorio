import { useState } from "react"
import classes from "./ItemCount.module.scss"

const ItemCount = () => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if (count < 100) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className={classes.contenedorCount}>
            <button className={classes.enlace} onClick={decrement}>-</button>
            <p>{count}</p>
            <button className={classes.enlace} onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount