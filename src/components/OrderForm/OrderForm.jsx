import { useEffect } from 'react'
import classes from './Form.module.scss'

const OrderForm = (onCreate) => {

    useEffect(() => {
        document.title = 'Plataforma 9 3/4 | Generar Orden'
    })
    return (
        <>
            <section className={`container ${classes.contact}`}>
                <form className={classes.form}>

                    <legend>Completa todos los campos para generar la orden</legend>

                    <div className={classes.container}>
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

                    <input type="submit" value='Generar Orden' className={classes.submit} />

                </form>
            </section>
        </>
    )
}

export default OrderForm