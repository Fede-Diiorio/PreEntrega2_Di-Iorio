import { db } from '../../services/firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';
import Button from '../Button/Button'
import classes from './NavBar.module.scss'

const NavBar = ({ toggleNavBar }) => {
    const handleButtonClick = () => {
        toggleNavBar();
    };

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = collection(db, 'categories')
        getDocs(categoriesCollection).then(querySnapshot => {
            const categoriesAdapted = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            })
            setCategories(categoriesAdapted)
        })
    }, [])

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
