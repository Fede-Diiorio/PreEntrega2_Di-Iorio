import { createContext, useContext } from "react";

const LocalStorageContext = createContext({
    saveCartToLocalStorage: () => { },
    getCartFromLocalStorage: () => { },
    removeProductFromLocalStorage: () => { },
    clearCartFormLocalStorage: () => { }
})

export const LocalStorageProvider = ({ children }) => {

    const saveCartToLocalStorage = (saveProduct) => {

        let cart = JSON.parse(localStorage.getItem('cart')) || []

        const findProduct = cart.find(prod => prod.name === saveProduct.name)

        if (!findProduct) {
            cart.push(saveProduct);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    const getCartFromLocalStorage = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        return cart
    }

    const removeProductFromLocalStorage = (id) => {
        const cart = getCartFromLocalStorage()
        const updateCart = cart.filter(prod => prod.id !== id)

        localStorage.setItem('cart', JSON.stringify(updateCart))
    }

    const clearCartFromLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify([]))
    }

    return (
        <LocalStorageContext.Provider value={{ saveCartToLocalStorage, getCartFromLocalStorage, removeProductFromLocalStorage, clearCartFromLocalStorage }}>
            {children}
        </LocalStorageContext.Provider>
    )

}

export const useLocalStorage = () => {
    return useContext(LocalStorageContext)
}