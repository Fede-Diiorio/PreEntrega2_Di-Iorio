import { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Notification.module.scss'

const NotificationContext = createContext({
    showNotification: () => { },
});

export const NotificationProvider = ({ children }) => {

    const showNotification = (type, text) => {
        toast[type](text, { autoClose: 3000 });
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            <ToastContainer className={classes.toastify} />
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    return useContext(NotificationContext);
};
