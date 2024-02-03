import { db } from '../firebaseConfig'
import { getDoc, doc } from "firebase/firestore"

export const orderData = async (orderSnapshot) => {
    const orderId = orderSnapshot.id;
    const getBuyData = async () => {
        try {
            const orderRef = doc(db, 'orders', orderId)
            const orderDoc = await getDoc(orderRef)
            if (orderDoc.exists()) {
                const orderData = orderDoc.data()
                return {
                    buyer: orderData.buyer,
                    item: orderData.item,
                    total: orderData.total,
                    orderId: orderId
                }
            }
        } catch (error) {
            throw error
        }
    }
    return await getBuyData()
}