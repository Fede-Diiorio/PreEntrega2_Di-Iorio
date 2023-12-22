import Card from "../Card/Card"

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <h2>{greeting}</h2>

            <div className="d-flex">
                <Card title={"Varita Voldemort"} image={"./varitaVoldemort.webp"} />
                <Card title={"Varita Harry Potter"} image={"./varitaHarry.webp"} />
                <Card title={"Varita de Sauco"} image={"./varitaSauco.webp"} />
            </div>
        </div>
    )
}

export default ItemListContainer