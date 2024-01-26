import { createContext, useContext } from "react";

const LocalStorageContext = createContext({
    saveCartToLocalStorage: () => { },
    getCartFromLocalStorage: () => { },
    removeProductFromLocalStorage: () => { },
    clearCartFormLocalStorage: () => { }
})

export const LocalStorageProvider = ({ children }) => {

    const saveCartToLocalStorage = (saveProduct) => {
        // const saveProduct = {
        //     id: id,
        //     name: name,
        //     price: price,
        //     quantity: quantity,
        //     img: img
        // }

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const findProduct = cart.find(prod => prod.name === saveProduct.name);

        if (!findProduct) {
            cart.push(saveProduct);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    return (
        <LocalStorageContext.Provider value={{ saveCartToLocalStorage }}>
            {children}
        </LocalStorageContext.Provider>
    )

}

export const useLocalStorage = () => {
    return useContext(LocalStorageContext)
}