import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [products, setProducts] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        getProductsById(id).then(response => {
            console.log(response)
            setProducts(response)
        }).catch(error => {
            console.error(error)
        })
    }, [id])

    if (!products) {
        return <h2>El producto no existe</h2>
    }

    return (
        <div className='container'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer
