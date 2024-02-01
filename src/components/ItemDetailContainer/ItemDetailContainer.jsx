import { useParams } from "react-router-dom"
import { useNotification } from "../../Notification/NotificationService"
import { useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import { useTitle } from "../../hooks/useTitle"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const { showNotification } = useNotification()

    const asyncFunction = () => getProductById(id)
    console.log(getProductById(id))
    const { data: product, error, loading } = useAsync(asyncFunction, [id])

    useTitle(product, `${product.name}`, [product]);

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (error) {
        showNotification('error', 'El producto no existe')
    }

    return (
        <section className='container'>
            <ItemDetail {...product} />
        </section>
    )
}

export default ItemDetailContainer
