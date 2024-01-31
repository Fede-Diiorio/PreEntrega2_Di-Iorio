import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNotification } from '../../Notification/NotificationService'
import { getProducts } from "../../services/firebase/firestore/products"
import ItemList from "../ItemList/ItemList"
import TitleChange from "../TitleChange/TitelChange"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    const { showNotification } = useNotification()

    useEffect(() => {
        if (categoryId) document.title = 'Plataforma 9 3/4 | ' + categoryId

        return () => {
            document.title = 'Plataforma 9 3/4'
        }
    }, [categoryId])

    const asyncFunction = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(asyncFunction, [categoryId])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (error) {
        showNotification('error', 'Hubo un error')
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