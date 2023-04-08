import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home1 from "./components/home1/Home1";
import Home2 from "./components/home2/Home2";
import Home3 from "./components/home3/Home3";
import Home4 from "./components/home4/Home4";
import Home5 from "./components/home5/Home5";
import Shop from "./components/home1/pages/shop/Shop";
import ProductDetail from "./components/home1/pages/productDetail/ProductDetail";
import { ProductProvider } from "./ProductContext";
function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home1 />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            <Route path="/home4" element={<Home4 />} />
            <Route path="/home5" element={<Home5 />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
