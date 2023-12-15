import classes from './NavBar.module.scss'
import icono from './assets/icono.png'

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
                        <li><button className='btn btn-primary'>Colgantes</button></li>
                        <li><button className='btn btn-primary'>Remeras</button></li>
                        <li> <button className='btn btn-primary'>Varitas</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar