import classes from './NavBar.module.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav>
                <ul className={classes.ul}>
                    <li><Link className={classes.link} to='/category/Remeras'><Button>Remeras</Button></Link></li>
                    <li><Link className={classes.link} to='/category/Colgantes'><Button>Colgantes</Button></Link></li>
                    <li><Link className={classes.link} to='/category/Varitas'><Button>Varitas</Button></Link></li>
                </ul>
            </nav>

        </div>
    )

}

export default NavBar