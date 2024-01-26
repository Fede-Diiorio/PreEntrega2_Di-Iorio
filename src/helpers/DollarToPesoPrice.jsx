import { useEffect, useState } from "react";
import { priceFormat } from "./priceFormat";

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

    return (
        <>
            {priceFormat(convertion)}
        </>
    )

}

export default DollarToPesoPrice