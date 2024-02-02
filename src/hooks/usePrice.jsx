import { useEffect, useState, createContext, useContext } from "react";

const PriceManagerContext = createContext({
    formatPrice: () => { },
    DollarToPesoPrice: () => { }
})

export const PriceManagerProvider = ({ children }) => {

    const formatPrice = (number) => {
        const numberWithDecimals = Number(number).toFixed(2);
        const formattedNumber = numberWithDecimals.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return formattedNumber;
    }

    const dollarToPesoPrice = (price) => {
        const [usd, setUsd] = useState(null);

        useEffect(() => {
            fetch('https://api.bluelytics.com.ar/v2/latest')
                .then(result => result.json())
                .then(resultJson => setUsd(resultJson.blue.value_avg))
                .catch(error => console.error("Error fetching USD rate:", error));
        }, [price]);

        if (usd === null) {
            // Puedes retornar un valor predeterminado o manejar la asincronía de otra manera aquí
            return "Loading...";
        }

        const convertion = price * usd;

        return formatPrice(convertion);
    }

    return (
        <PriceManagerContext.Provider value={{ dollarToPesoPrice, formatPrice }}>
            {children}
        </PriceManagerContext.Provider>
    )
}

export const useFormatPrice = () => {
    return useContext(PriceManagerContext)
}

