import classes from './Button.module.scss'

const Button = ({ children }) => {
    return <button className={classes.boton}>{children}</button>
}

export default Button