import { db } from '../firebaseConfig'
import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"
import { createProductAdaptedFromFireStore } from '../../../adapters/createProducAdapterFromFirestore'

export const getProducts = (categoryId) => {
    const productsCollection = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')

    return getDocs(productsCollection).then(querySnapshot => {
        const productsAddapted = querySnapshot.docs.map(doc => {
            return createProductAdaptedFromFireStore(doc)
        })
        return productsAddapted
    }).catch(error => {
        return error
    })
}

export const getProductById = (id) => {
    const productDocument = doc(db, 'products', id)
    return getDoc(productDocument).then(queryDocumentSnapshot => {
        const productAddapted = createProductAdaptedFromFireStore(queryDocumentSnapshot)
        return productAddapted
    }).catch(error => {
        return error
    })
}