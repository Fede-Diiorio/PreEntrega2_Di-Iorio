import clases from './Card.module.scss'
import Button from '../Button/Button'

const Card = (props) => {
    return (
        <div className={clases.propiedades}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Descripción del producto</p>
                    <Button label={"Comprar"} />
                </div>
            </div>
        </div>
    )
}

export default Card