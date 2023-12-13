import clases from './Card.module.css'

const Card = () => {
    return (
        <div className={clases.propiedades}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Nombre del Producto</h5>
                    <p className="card-text">Descripción del producto</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default Card