import classes from './Error404.module.scss'
import Button from '../Button/Button'
import { TbMoodSadDizzy } from "react-icons/tb";

const Error404 = () => {
    return (
        <section className={classes.container}>
            <TbMoodSadDizzy className={classes.sadFace} />
            <h2>404</h2>
            <p>El sitio no funciona</p>
            <Button to={'/'}>Volver</Button>
        </section>
    )
}

export default Error404