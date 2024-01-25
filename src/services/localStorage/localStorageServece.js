function saveToLocalStorage(img, name, price, quantity, id) {
    const saveProduct = {
        id: id,
        img: img,
        name: name,
        price: price,
        quantity: quantity
    }

    if (cart === null) {
        cart = [saveProduct]
    } else {
        const findProduct = cart.find(prod => {
            return prod.name === saveProduct.name
        })
        if (findProduct === 1) {
            cart.push(saveProduct)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

const cart = []

export { saveToLocalStorage }