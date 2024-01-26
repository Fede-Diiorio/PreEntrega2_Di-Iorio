import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { LocalStorageProvider } from "./LocalStorageContext/LocalStorageContext"
import { NotificationProvider } from "./Notification/NotificationService"

import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import Error404 from "./components/Error404/Error404"

function App() {
  return (
    <>
      <BrowserRouter>
        <LocalStorageProvider>
          <NotificationProvider>
            <CartProvider>
              <Header />
              <Routes>
                <Route path="/" element={<ItemListContainer greeting={"¡Bienvenidos!"} />} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos Filtrados: "} />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </CartProvider>
          </NotificationProvider>
        </LocalStorageProvider>
      </BrowserRouter>
    </>
  )
}

export default App
