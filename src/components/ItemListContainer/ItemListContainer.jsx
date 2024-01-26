import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import TileChange from "../TitleChange/TitelChange"
import { useParams } from "react-router-dom"
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from "firebase/firestore"
import { useNotification } from '../../Notification/NotificationService'

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
    })

    useEffect(() => {

        const productsCollection = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')

        getDocs(productsCollection).then(querySnapshot => {
            const productsAddapted = querySnapshot.docs.map(doc => {
                const filds = doc.data()
                return { id: doc.id, ...filds }
            })
            setProducts(productsAddapted)
        }).catch(error => {
            showNotification('error', 'No se puede acceder al base de datos')
        }).finally(() => {
            setLoading(false)
        })
    }, [])

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