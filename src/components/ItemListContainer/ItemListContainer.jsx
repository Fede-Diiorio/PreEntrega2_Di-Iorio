import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNotification } from '../../Notification/NotificationService'
import { getProducts } from "../../services/firebase/firestore/products"
import ItemList from "../ItemList/ItemList"
import TitleChange from "../TitleChange/TitelChange"

const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const { showNotification } = useNotification()


    useEffect(() => {
        if (categoryId) document.title = 'Plataforma 9 3/4 | ' + categoryId

        return () => {
            document.title = 'Plataforma 9 3/4'
        }
    }, [categoryId])

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            showNotification('error', 'No se puede acceder al base de datos')
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <section className="container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
            <TitleChange title={'Plataforma 9 3/4 | Inicio'} />
        </section>
    )
}

export default ItemListContainer