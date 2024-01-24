import { createContext, useContext, useState } from "react";
import { useEffect, useState } from "react";
import { useNotification } from "..Notification/Notification";

const ConfirmNotificationContext = createContext({
    showConfirmNotification: () => { }
})

const { showNotification } = useNotification()

const ConfirmNotification = ({ notificationData }) => {
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

    const showConfirmAlert = () => {
        Swal.fire({
            title: title[notificationData.type],
            text: notificationData.text,
            icon: icon[notificationData.type],
            showCancelButton: true,
            buttonsStyling: false,
            // confirmButtonColor: '#3085d6',
            // cancelButtonColor: '#d33',
            confirmButtonText: notificationData.confirmButton,
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'button confirm',
                cancelButton: 'button cancel',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteItem();
            }
        });
    }
}

export const ConfirmNotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: '',
        text: '',
        confirmButton: ''
    })

    const showConfirmNotification = (type, text, confirmButton) => {
        setNotificationData({ type, text, confirmButton })
    }

    return (
        <ConfirmNotificationContext.Provider value={showConfirmNotification}>
            <ConfirmNotification notificationData={notificationData} />
            {children}
        </ConfirmNotificationContext.Provider>
    )
}

export const useConfirmNotification = () => {
    return useContext(ConfirmNotificationContext)
}