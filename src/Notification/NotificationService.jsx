import { useState, createContext, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import './NotificationService.scss';

const NotificationContext = createContext({
    showNotification: () => { },
    showConfirmation: () => { }
});

const ConfirmNotification = ({ notificationData }) => {
    if (!notificationData || !notificationData.text) {
        return null;
    }

    Swal.fire({
        title: '¿Estás seguro?',
        text: notificationData.text,
        icon: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: notificationData.confirmButton,
        cancelButtonText: 'Cancelar',
        customClass: {
            confirmButton: 'button confirm',
            cancelButton: 'button cancel',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            notificationData.addAction()
        }
    });
}

const Notification = ({ notificationData }) => {
    const icon = {
        success: 'success',
        error: 'error',
        info: 'info',
        question: 'question',
        warning: 'warning'
    };

    const title = {
        success: '¡Exitos!',
        error: 'Error :(',
        info: 'Información',
        question: 'Pregunta:',
        warning: 'warning'
    };

    useEffect(() => {
        showAlert();
    }, [notificationData]);

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
        text: '',
        confirmButton: '',
        addAction: () => { }
    })

    const showNotification = (type, text) => {
        setNotificationData({ type, text });
    };

    const showConfirmation = ({ text, confirmButton, addAction }) => {
        setNotificationData({ text, confirmButton, addAction });
    };

    return (
        <NotificationContext.Provider value={{ showNotification, showConfirmation }}>
            {notificationData.text && (
                notificationData.confirmButton ? (
                    <ConfirmNotification notificationData={notificationData} />
                ) : (
                    <Notification notificationData={notificationData} />
                )
            )}
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotification = () => {
    return useContext(NotificationContext);
}
