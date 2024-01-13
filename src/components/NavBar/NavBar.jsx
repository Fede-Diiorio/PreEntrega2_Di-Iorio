import classes from './NavBar.module.scss'
import icono from './assets/icono.png'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className={classes.background}>
            <div className={`${classes.align} containar`}>
                <div >
                    <Link to='/' className={classes.contenedor}>
                        <h1 className={classes.title}>Plataforma</h1>
                        <img src={icono} alt="Icono de Plataforma 9 y 3/4" />
                    </Link>
                </div>

                <nav>
                    <ul className={classes.ul}>
                        <li><Link className={classes.link} to='/category/Remeras'><Button>Remeras</Button></Link></li>
                        <li><Link className={classes.link} to='/category/Colgantes'><Button>Colgantes</Button></Link></li>
                        <li><Link className={classes.link} to='/category/Varitas'><Button>Varitas</Button></Link></li>
                    </ul>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar