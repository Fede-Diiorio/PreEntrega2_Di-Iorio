import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore"

export const getCategories = () => {
    const categoriesCollection = collection(db, 'categories')
    return getDocs(categoriesCollection).then(querySnapshot => {
        const categoriesAdapted = querySnapshot.docs.map(doc => {
            const fields = doc.data()
            return { id: doc.id, ...fields }
        })
        return categoriesAdapted
    }).catch(error => {
        return error
    })
}