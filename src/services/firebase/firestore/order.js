import { db } from '../firebaseConfig'
import { getDoc, doc } from "firebase/firestore"

export const orderData = (orderSnapshot) => {
    const orderId = orderSnapshot.id
    const getBuyData = doc(db, 'orders', orderId)
    return getDoc(getBuyData).then(querySnapshot => {
        const fields = querySnapshot.data()
        const orderAdapted = {
            id: querySnapshot.id, ...fields
        }
        return orderAdapted
    }).catch(error => {
        return error
    })
}