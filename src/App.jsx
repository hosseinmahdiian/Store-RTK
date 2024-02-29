import { Navigate, Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import Detailspage from "./pages/Detailspage";
import CheckoutPage from "./pages/CheckoutPage";
import Layout from "./layout/Layout";
import NotFind from "./pages/NotFind";
// import CartProvider from "./context/CartProvider";
// import ProductsProvider from "./context/productsProvider";

function App() {
  return (
    <>
      {/* <CartProvider> */}
      {/* <ProductsProvider> */}
      <Layout>
        <Routes>
          <Route index element={<Navigate to=" /Products" replace />} />
          <Route path="/Products" element={<Products />} />
          <Route path="Products/:id" element={<Detailspage />} />
          <Route path="CheckoutPage" element={<CheckoutPage />} />
          <Route path="*" element={<NotFind />} />
        </Routes>
      </Layout>
      {/* </ProductsProvider> */}
      {/* </CartProvider> */}
    </>
  );
}

export default App;
