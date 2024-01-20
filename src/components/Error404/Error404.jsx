import classes from './Error404.module.scss'
import Button from '../Button/Button'

const Error404 = () => {
    return (
        <>
            <div className={classes.container}>
                <h2>Error 404</h2>
                <Button to={'/'}>Volver</Button>
            </div>
        </>
    )
}

export default Error404