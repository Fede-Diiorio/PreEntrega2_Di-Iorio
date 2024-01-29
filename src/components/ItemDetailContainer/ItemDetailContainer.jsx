import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from "firebase/firestore"
import { useNotification } from "../../Notification/NotificationService"

const ItemDetailContainer = () => {

    const [loading, setLoadign] = useState(true)
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const { showNotification } = useNotification()

    useEffect(() => {
        if (product) document.title = product.name

        return () => {
            document.title = 'Plataforma 9 3/4'
        }
    })

    useEffect(() => {
        setLoadign(true)

        const productDocument = doc(db, 'products', id)

        getDoc(productDocument).then(queryDocumentSnapshot => {
            const filds = queryDocumentSnapshot.data()
            const productAddapted = { id: queryDocumentSnapshot.id, ...filds }
            setProduct(productAddapted)
        }).catch(error => {
            showNotification('error', 'Hubo un error')
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
        <section className='container'>
            <ItemDetail {...product} />
        </section>
    )
}

export default ItemDetailContainer
