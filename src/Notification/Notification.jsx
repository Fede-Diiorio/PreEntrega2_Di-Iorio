import { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationContext = createContext({
    showNotification: () => { },
});

export const NotificationProvider = ({ children }) => {

    const showNotification = (type, text) => {
        toast[type](text, { autoClose: 3000 });
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            <ToastContainer />
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    return useContext(NotificationContext);
};
