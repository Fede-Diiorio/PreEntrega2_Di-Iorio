import classes from './Header.module.scss'
import icono from './assets/icono.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
    return (
        <>
            <header className={classes.background}>
                <div className='container'>

                    <div className={classes.container}>
                        <div></div>
                        <div >
                            <Link to='/' className={classes.titleContainer}>
                                <h1 className={classes.title}>Plataforma</h1>
                                <img src={icono} alt="Icono de Plataforma 9 y 3/4" />
                            </Link>
                        </div>

                        <CartWidget className={classes.cartWidget} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header