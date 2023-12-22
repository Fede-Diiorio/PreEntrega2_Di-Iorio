import classes from './Button.module.scss'

const Button = ({ label }) => {
    return <button className={classes.boton}>{label}</button>
}

export default Button