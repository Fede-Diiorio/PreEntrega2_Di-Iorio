import { useState, createContext, useContext } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import './Notification.scss';

const NotificationContext = createContext({
    showNotification: () => { }
})

const Notification = ({ notificationData }) => {

    const icon = {
        success: 'success',
        error: 'error',
        info: 'info',
        question: 'question',
    }
    const title = {
        success: '¡Exitos!',
        error: 'Error :(',
        info: 'Información',
        question: 'Pregunta:',
    }

    useEffect(() => {
        showAlert();
    })

    const showAlert = () => {
        Swal.fire({
            title: title[notificationData.type],
            text: notificationData.text,
            icon: icon[notificationData.type],
            buttonsStyling: false,
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'button',
            },
        })
    }
}

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const showNotification = (type, text) => {
        setNotificationData({ type, text })
        setTimeout(() => {
            setNotificationData({ type, text: '' })
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {notificationData.text && <Notification notificationData={notificationData} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}