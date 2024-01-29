import { useState } from 'react';
import icono from './assets/icono.png';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import { TbMenu2 } from 'react-icons/tb';
import { useCart } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget';
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    const { totalQuantity } = useCart();
    const [show, setShow] = useState(false);
    const toggleNavBar = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <header className={classes.background}>
                <div className='container'>
                    <div className={classes.container}>
                        <Button onClick={() => setShow((prev) => !prev)}>
                            <TbMenu2 className={classes.hamburgerMenu} />
                        </Button>
                        <div>
                            <Link to='/' className={classes.titleContainer}>
                                <h1 className={classes.title}>Plataforma</h1>
                                <img src={icono} alt='Icono de Plataforma 9 y 3/4' />
                            </Link>
                        </div>
                        {totalQuantity > 0 ? <CartWidget /> : <div className={classes.noDisplay}></div>}
                    </div>
                    {show ? <NavBar toggleNavBar={toggleNavBar} /> : null}
                </div>
            </header>
        </>
    );
};

export default Header;
