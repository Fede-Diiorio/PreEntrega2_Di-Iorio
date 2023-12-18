import Card from "../Card/Card"

const ItemListContainer = (greeting) => {
    return (
        <div className="container">
            <h2>{greeting.title}</h2>

            <div className="d-flex">
                <Card title={"Varita Voldemort"} />
                <Card title={"Varita Harry Potter"} />
                <Card title={"Varita de Sauco"} />
            </div>
        </div>
    )
}

export default ItemListContainer