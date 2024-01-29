import classes from './NavBar.module.scss'
import Button from '../Button/Button'

const NavBar = ({ toggleNavBar }) => {
    const handleButtonClick = () => {
        toggleNavBar();
    };

    return (
        <aside className={classes.aside}>
            <nav>
                <ul className={classes.ul}>
                    <li><Button to='/category/Colgantes' onClick={handleButtonClick}>Colgantes</Button></li>
                    <li><Button to='/category/Remeras' onClick={handleButtonClick}>Remeras</Button></li>
                    <li><Button to='/category/Varitas' onClick={handleButtonClick}>Varitas</Button></li>
                </ul>
            </nav>
        </aside>
    )
}

export default NavBar;
