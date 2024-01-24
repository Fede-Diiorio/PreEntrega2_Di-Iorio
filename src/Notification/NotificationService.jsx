import { useState, createContext, useContext } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import './NotificationService.scss';

const NotificationContext = createContext({
    showNotification: () => { }
})

const Notification = ({ notificationData }) => {

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
        warning: 'warning'
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
                confirmButton: 'button confirm',
            },
        })
    }
}

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: '',
        text: ''
    })

    const showNotification = (type, text) => {
        setNotificationData({ type, text })
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