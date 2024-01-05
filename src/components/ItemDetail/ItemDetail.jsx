import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ name, img, description, stock }) => {
    return (

        <div className="card">
            <img src={img} className='card-img-top' />
            <div className="card-body">
                <h4 className='card-title'>{name}</h4>
                <p className='card-text'>{description}</p>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada: ', quantity)} />
            </div>
        </div>

    )
}

export default ItemDetail