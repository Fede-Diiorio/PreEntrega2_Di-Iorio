import React, { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import './Notification.scss';

const NotificationContext = createContext({
    showNotification: () => { },
    showConfirmNotification: () => { }
});

const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: '',
        text: ''
    });

    const [confirmNotificationData, setConfirmNotificationData] = useState({
        type: '',
        text: '',
        confirmButton: ''
    });

    const showNotification = (type, text) => {
        setNotificationData({ type, text });
    };

    const showConfirmNotification = (type, text, confirmButton) => {
        setConfirmNotificationData({ type, text, confirmButton });
    };

    useEffect(() => {
        if (notificationData.text) {
            showAlert(notificationData);
        }
        if (confirmNotificationData.text) {
            showConfirmAlert(confirmNotificationData);
        }
    }, [notificationData, confirmNotificationData]);

    const showAlert = ({ type, text }) => {
        Swal.fire({
            title: getTitle(type),
            text,
            icon: getIcon(type),
            buttonsStyling: false,
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'button confirm',
            },
        });
    };

    const showConfirmAlert = ({ type, text, confirmButton, id }) => {
        Swal.fire({
            title: getTitle(type),
            text,
            icon: getIcon(type),
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: confirmButton,
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'button confirm',
                cancelButton: 'button cancel',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Handle confirmation logic
            }
        });
    };

    const getTitle = (type) => {
        return {
            success: '¡Éxito!',
            error: 'Error :(',
            info: 'Información',
            question: 'Pregunta',
            warning: 'Advertencia'
        }[type];
    };

    const getIcon = (type) => {
        return {
            success: 'success',
            error: 'error',
            info: 'info',
            question: 'question',
            warning: 'warning'
        }[type];
    };

    const contextValue = {
        showNotification,
        showConfirmNotification
    };

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    );
};

const useNotification = () => {
    return useContext(NotificationContext);
};

export { NotificationProvider, useNotification };
