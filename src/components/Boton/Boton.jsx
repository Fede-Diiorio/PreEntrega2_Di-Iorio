import classes from './Boton.module.scss'

const Boton = (props) => {
    console.log(props)
    return <button className={classes.boton}>{props.label}</button>
}

export default Boton