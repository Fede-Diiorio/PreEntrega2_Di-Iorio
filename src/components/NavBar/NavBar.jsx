import classes from './NavBar.module.scss'
import Button from '../Button/Button'

const NavBar = () => {
    return (
        <aside className={classes.aside}>

            <nav>
                <ul className={classes.ul}>
                    <li><Button to='/category/Colgantes'>Colgantes</Button></li>
                    <li><Button to='/category/Remeras'>Remeras</Button></li>
                    <li><Button to='/category/Varitas'>Varitas</Button></li>
                </ul>
            </nav>

        </aside>
    )
}

export default NavBar