import classes from './Button.module.scss'

const Button = ({ children, onClick }) => {
    return <button onClick={onClick} className={classes.boton}>{children}</button>
}

export default Button