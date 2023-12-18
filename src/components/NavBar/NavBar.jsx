import classes from './NavBar.module.scss'
import icono from './assets/icono.png'
import Button from '../Button/Button'
import Cart from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className={classes.background}>
            <div className={`${classes.align} containar`}>
                <div className={classes.contenedor}>
                    <h1 className={classes.titulo}>Plataforma</h1>
                    <img src={icono} alt="Icono de Plataforma 9 y 3/4" />
                </div>

                <nav>
                    <ul className={classes.ul}>
                        <li><Button label={"Remeras"} /></li>
                        <li><Button label={"Colgantes"} /></li>
                        <li><Button label={"Varitas"} /></li>
                    </ul>
                </nav>

                <Cart />
            </div>
        </header>
    )
}

export default NavBar