export const createProductAdaptedFromFireStore = (doc) => {
    const fields = doc.data()
    return {
        id: doc.id,
        name: fields.name,
        category: fields.category,
        price: fields.price,
        img: fields.img,
        description: fields.description,
        stock: fields.stock
    }
}