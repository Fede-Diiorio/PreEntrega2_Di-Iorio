import { createContext, useContext, useEffect, useState } from "react"
import { useNotification } from "../Notification/NotificationService"
import { useLocalStorage } from "../LocalStorageContext/LocalStorageContext"

const CartContext = createContext({
    cart: [],
    addItem: () => { },
    removeItem: () => { },
    totalQuantity: 0,
    totalPrice: 0,
    clearCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const { showNotification } = useNotification()
    const { getCartFromLocalStorage } = useLocalStorage()

    useEffect(() => {
        const cartFromLocalStorage = getCartFromLocalStorage()
        setCart(cartFromLocalStorage)
    }, [])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
            showNotification('success', 'Agregado correctamente.')
        } else {
            showNotification('error', `El producto ya está en el carrito.`)
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter(prod => prod.id !== id)
        setCart(cartUpdate)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotalPrice = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.price * prod.quantity
        })

        return accu
    }

    const totalPrice = getTotalPrice()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>

    )
}

export const useCart = () => {
    return useContext(CartContext)
}
