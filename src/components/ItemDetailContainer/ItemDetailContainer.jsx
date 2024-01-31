import { useParams } from "react-router-dom"
import { useNotification } from "../../Notification/NotificationService"
import { useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const { showNotification } = useNotification()

    useEffect(() => {
        if (product) document.title = product.name

        return () => {
            document.title = 'Plataforma 9 3/4'
        }
    })

    const asyncFunction = () => getProductById(id)
    console.log(getProductById(id))
    const { data: product, error, loading } = useAsync(asyncFunction, [id])

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
