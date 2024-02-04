import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { LocalStorageProvider } from "./LocalStorageContext/LocalStorageContext"
import { NotificationProvider } from "./Notification/NotificationService"
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartView from "./components/CartView/CartView"
import Error404 from "./components/Error404/Error404"
import Checkout from "./components/Checkout/Checkout"
import { FormatPriceProvider } from "./hooks/useFormatPrice"

function App() {
  return (
    <main>
      <BrowserRouter>
        <FormatPriceProvider>
          <LocalStorageProvider>
            <NotificationProvider>
              <CartProvider>
                <Header />
                <Routes>
                  <Route path="/" element={<ItemListContainer greeting={"¡Bienvenidos!"} />} />
                  <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Filtro por Categoria"} />} />
                  <Route path="/detail/:id" element={<ItemDetailContainer />} />
                  <Route path="/cart" element={<CartView />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </CartProvider>
            </NotificationProvider>
          </LocalStorageProvider>
        </FormatPriceProvider>
      </BrowserRouter>
    </main>
  )
}

export default App
