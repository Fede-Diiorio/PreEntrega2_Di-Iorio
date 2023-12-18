import Card from "../Card/Card"

const ItemListContainer = (greeting) => {
    return (
        <div className="container d-flex">
            <h2>{greeting.title}</h2>

            <Card title={"Varita Voldemort"} />
            <Card title={"Varita Harry Potter"} />
            <Card title={"Varita de Sauco"} />
        </div>
    )
}

export default ItemListContainer