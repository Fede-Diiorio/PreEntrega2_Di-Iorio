import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import TileChange from "../TitleChange/TitelChange"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className="container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
            <TileChange title={'Plataforma 9 3/4 | Inicio'} />
        </div>
    )
}

export default ItemListContainer