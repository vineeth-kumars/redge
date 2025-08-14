import logo from "./logo.svg";
import "./App.css";
import HomePage from "./screens/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./screens/ProductPage";
import Layout from "./screens/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productData" element={<ProductPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
