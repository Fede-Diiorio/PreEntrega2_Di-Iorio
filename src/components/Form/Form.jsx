import classes from './Form.module.scss'

const From = () => {
    return (
        <>
            <section className={`container ${classes.contact}`}>
                <h2>Contacto</h2>
                <form className={classes.form}>

                    <legend>Contactame completando todos los campos</legend>

                    <div className={classes.grid}>
                        <div className={classes.gridContainer}>

                            <div className={classes.field}>
                                <label>Nombre:</label>

                                <input type="text" placeholder="Tu Nombre" />
                            </div>

                            <div className={classes.field}>
                                <label>Teléfono:</label>
                                <input type="tel" placeholder="Tu Teléfono" />
                            </div>

                            <div className={classes.field}>
                                <label>E-mail:</label>
                                <input type="email" placeholder="Tu E-mail" />
                            </div>
                        </div>

                        <div className={classes.field}>
                            <label>Mensaje:</label>
                            <textarea cols="30" rows="10" placeholder="Hola, quisiera consultarte por..."></textarea>
                        </div>
                    </div>

                </form>
            </section>
        </>
    )
}

export default From