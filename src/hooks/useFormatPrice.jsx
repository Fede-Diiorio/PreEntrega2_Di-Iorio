import { useEffect, useState, createContext, useContext } from "react";

const FormatPriceContext = createContext({
    formatPrice: () => { },
    dollarFormatPrice: () => { },
});

export const FormatPriceProvider = ({ children }) => {
    const formatPrice = (number) => {
        const numberWithDecimals = Number(number).toFixed(2);
        const formattedNumber = numberWithDecimals.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
        )
        return formattedNumber;
    }

    const DollarFormatPriceImpl = () => {
        const [usd, setUsd] = useState(null)

        useEffect(() => {
            fetch("https://api.bluelytics.com.ar/v2/latest")
                .then((result) => result.json())
                .then((resultJson) => {
                    setUsd(resultJson.blue.value_avg)
                })
        }, [])

        const dollarFormatPrice = (price) => {
            const conversion = price * usd
            return formatPrice(conversion)
        }

        return dollarFormatPrice;
    }

    const dollarFormatPrice = DollarFormatPriceImpl();

    return (
        <FormatPriceContext.Provider value={{ dollarFormatPrice, formatPrice }}>
            {children}
        </FormatPriceContext.Provider>
    )
}

export const useFormatPrice = () => {
    return useContext(FormatPriceContext);
}
