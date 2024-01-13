import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [loading, setLoadign] = useState(true)

    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        if (product) document.title = product.name

        return () => {
            document.title = 'Plataforma 9 3/4'
        }
    })

    useEffect(() => {
        getProductsById(id).then(response => {
            setProduct(response)
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setLoadign(false)
        })
    }, [id])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (!product) {
        return <h2>El producto no existe</h2>
    }


    return (
        <div className='container'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
