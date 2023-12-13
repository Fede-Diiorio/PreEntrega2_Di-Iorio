import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav>
            <h1 className={classes.titulo}>Ecommerce</h1>
            <section>
                <button>Celulares</button>
                <button>Teblets</button>
                <button>Notebooks</button>
            </section>
        </nav>
    )
}

export default NavBar