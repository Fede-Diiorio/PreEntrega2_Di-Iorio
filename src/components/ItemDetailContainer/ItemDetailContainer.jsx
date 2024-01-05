import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProductsById(5).then(response => {
            console.log(response)
            setProducts(response)
        }).catch(error => {
            console.error(error)
        })
    })

    return (
        <div className='container'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer
