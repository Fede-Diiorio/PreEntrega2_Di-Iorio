import { useEffect, useState } from "react";

export const formatPrice = (number) => {
    const numberWithDecimals = Number(number).toFixed(2);
    const formattedNumber = numberWithDecimals.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedNumber;
}

const DollarToPesoPrice = ({ price }) => {

    const [usd, setUsd] = useState(null)

    useEffect(() => {
        fetch('https://api.bluelytics.com.ar/v2/latest').then(result => {
            return result.json()
        }).then(resultJson => {
            setUsd(resultJson.blue.value_avg)
        })
    }, [])

    const convertion = price * usd

    return formatPrice(convertion)
}

export default DollarToPesoPrice