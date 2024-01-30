import { Link } from 'react-router-dom'
import classes from './Button.module.scss'

const Button = ({ children, onClick, to }) => {
    return <Link to={to}><button onClick={onClick} className={classes.button}>{children}</button></Link>
}

export default Button