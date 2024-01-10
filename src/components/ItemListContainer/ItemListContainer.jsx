import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import TileChange from "../TitleChange/TitelChange"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        })
    }, [categoryId])

    return (
        <div className="container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
            <TileChange title={'Plataforma 9 3/4 | Inicio'} />
        </div>
    )
}

export default ItemListContainer