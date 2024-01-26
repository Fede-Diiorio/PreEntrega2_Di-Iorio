import React, { createContext, useContext, useEffect, useState } from 'react';
import { saveCartToLocalStorage, getCartFromLocalStorage, removeProductFromLocalStorage, clearCartFromLocalStorage } from '../tuRutaAlArchivo/localStorageFunctions';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartFromLocalStorage = getCartFromLocalStorage();
        setCart(cartFromLocalStorage);
    }, []);

    const addItemToCart = (id, name, price, quantity, img) => {
        saveCartToLocalStorage(id, name, price, quantity, img);
        const updatedCart = getCartFromLocalStorage();
        setCart(updatedCart);
    };

    const removeItemFromCart = (id) => {
        removeProductFromLocalStorage(id);
        const updatedCart = getCartFromLocalStorage();
        setCart(updatedCart);
    };

    const clearCart = () => {
        clearCartFromLocalStorage();
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
