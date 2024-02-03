import Button from '../Button/Button'
import classes from './NavBar.module.scss'
import { getCategories } from '../../services/firebase/firestore/categories'
import { useAsync } from '../../hooks/useAsync';

const NavBar = ({ toggleNavBar }) => {
    const handleButtonClick = () => {
        toggleNavBar();
    };

    const asyncFunction = () => getCategories()
    const { data: categories } = useAsync(asyncFunction, [])

    return (
        <section className={classes.aside}>
            <nav>
                <ul className={classes.ul}>
                    {
                        categories.map(cat => (
                            <li key={cat.id}><Button to={`/category/${cat.slug}`} onClick={handleButtonClick}>{cat.name}</Button></li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}

export default NavBar;
