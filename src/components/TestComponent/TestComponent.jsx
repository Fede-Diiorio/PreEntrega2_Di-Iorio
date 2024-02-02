import { useFormatPrice } from "../../hooks/usePrice"

const TestComponent = ({ price }) => {

    const { formatPrice, dollarToPesoPrice } = useFormatPrice()

    return (
        <>
            <h2>Test Component: {dollarToPesoPrice(price)}</h2>
            <h2>Test Component: {formatPrice(price)}</h2>
        </>
    )
}

export default TestComponent