import { db } from '../firebaseConfig'
import { getDocs, collection, query, where } from "firebase/firestore"

export const getProducts = (categoryId) => {
    const productsCollection = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')

    return getDocs(productsCollection).then(querySnapshot => {
        const productsAddapted = querySnapshot.docs.map(doc => {
            const filds = doc.data()
            return { id: doc.id, ...filds }
        })
        return productsAddapted
    }).catch(error => {
        return error
    })
}