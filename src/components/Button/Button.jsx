import classes from './Button.module.scss'

const Button = (props) => {
    return <button className={classes.boton}>{props.label}</button>
}

export default Button