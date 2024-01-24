import { createContext, useContext, useState, useEffect } from "react";
import { useNotification } from "./notification/Notification";
import { useCart } from "./context/CartContext";
import Swal from "sweetalert2";

const ConfirmNotificationContext = createContext({
    showConfirmNotification: () => { }
})

const { showNotification } = useNotification()
const { removeItem } = useCart()

const ConfirmNotification = ({ confirmNotificationData }) => {
    const icon = {
        success: 'success',
        error: 'error',
        info: 'info',
        question: 'question',
        warning: 'warning'
    }
    const title = {
        success: '¡Exitos!',
        error: 'Error :(',
        info: 'Información',
        question: 'Pregunta:',
        warning: '¿Estás Seguro?'
    }

    useEffect(() => {
        showConfirmAlert();
    })

    const showConfirmAlert = ({ id }) => {
        Swal.fire({
            title: title[confirmNotificationData.type],
            text: confirmNotificationData.text,
            icon: icon[confirmNotificationData.type],
            showCancelButton: true,
            buttonsStyling: false,
            // confirmButtonColor: '#3085d6',
            // cancelButtonColor: '#d33',
            confirmButtonText: confirmNotificationData.confirmButton,
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'button confirm',
                cancelButton: 'button cancel',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id)
                showNotification('success', 'Eliminado correctamente')
            }
        });
    }
}

export const ConfirmNotificationProvider = ({ children }) => {
    const [confirmNotificationData, setConfirmNotificationData] = useState({
        type: '',
        text: '',
        confirmButton: ''
    })

    const showConfirmNotification = (type, text, confirmButton) => {
        setConfirmNotificationData({ type, text, confirmButton })
    }

    return (
        <ConfirmNotificationContext.Provider value={showConfirmNotification}>
            <ConfirmNotification confirmNotificationData={confirmNotificationData} />
            {children}
        </ConfirmNotificationContext.Provider>
    )
}

export const useConfirmNotification = () => {
    return useContext(ConfirmNotificationContext)
}