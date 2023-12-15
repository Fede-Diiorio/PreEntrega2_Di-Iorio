import classes from './NavBar.module.scss'
import icono from './assets/icono.png'
import Boton from '../Boton/Boton'

const NavBar = () => {
    return (
        <header className={classes.background}>
            <div className='container'>
                <div className={classes.contenedor}>
                    <img src={icono} alt="Icono de Plataforma 9 y 3/4" />
                    <h1 className={classes.titulo}>Tienda 9<span>3/4</span></h1>
                </div>

                <nav>
                    <ul className={classes.ul}>
                        <li><Boton label={"Colgantes"} /></li>
                        <li><Boton label={"Remeras"} /></li>
                        <li><Boton label={"Varitas"} /></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar