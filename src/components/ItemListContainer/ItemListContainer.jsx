import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import TileChange from "../TitleChange/TitelChange"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) document.title = 'Plataforma 9 3/4 | ' + categoryId

        return () => {
            document.title = 'Plataforma 9 3/4'
        }
    })


    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div className="container">
            <h2>{greeting + (categoryId ?? '')}</h2>
            <ItemList products={products} />
            <TileChange title={'Plataforma 9 3/4 | Inicio'} />
        </div>
    )
}

export default ItemListContainer