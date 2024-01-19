import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"¡Bienvenidos!"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos Filtrados: "} />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>ERROR 404</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
