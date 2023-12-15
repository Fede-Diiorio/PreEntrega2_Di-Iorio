import NavBar from "./components/NavBar/NavBar"
import Card from "./components/Card/Card"

function App() {
  return (
    <>
      <NavBar />
      <div className={"d-flex container"}>
        <Card title={"Varita Voldemort"} />
        <Card title={"Varita Harry Potter"} />
        <Card title={"Varita de Sauco"} />
      </div>
    </>
  )
}

export default App
