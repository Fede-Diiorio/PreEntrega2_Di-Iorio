import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <h1 className={classes.titulo}>Ecommerce</h1>
            <section>
                <button className='btn btn-primary'>Celulares</button>
                <button className='btn btn-primary'>Teblets</button>
                <button className='btn btn-primary'>Notebooks</button>
            </section>
        </nav>
    )
}

export default NavBar