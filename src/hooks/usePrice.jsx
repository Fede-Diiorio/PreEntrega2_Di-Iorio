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

    const dollarToPesoPrice = async ({ price }) => {
        try {
            const result = await fetch("https://api.bluelytics.com.ar/v2/latest");
            const resultJson = await result.json();
            const usd = resultJson.blue.value_avg;

            const conversion = price * usd;
            return formatPrice(conversion);
        } catch (error) {
            return formatPrice(price);
        }
    };

    return (
        <PriceManagerContext.Provider value={{ dollarToPesoPrice, formatPrice }}>
            {children}
        </PriceManagerContext.Provider>
    )
}

export const useFormatPrice = () => {
    return useContext(PriceManagerContext)
}

