import classes from './Header.module.scss'
import icono from './assets/icono.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { TbMenu2 } from "react-icons/tb";
import { useCart } from '../../context/CartContext';


const Header = () => {

    const { totalQuantity } = useCart()

    return (
        <>
            <header className={classes.background}>
                <div className='container'>

                    <div className={classes.container}>
                        <button><TbMenu2 className={classes.hamburgerMenu} /></button>

                        <div >
                            <Link to='/' className={classes.titleContainer}>
                                <h1 className={classes.title}>Plataforma</h1>
                                <img src={icono} alt="Icono de Plataforma 9 y 3/4" />
                            </Link>
                        </div>

                        {totalQuantity > 0 ? <CartWidget /> : <div></div>}

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header