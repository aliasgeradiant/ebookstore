import { Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { products } from "./Store/HomeSlice";
import {getAllProductsHandler} from "./backend/controllers/ProductController"
import Category from "./pages/CategoryPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const res = getAllProductsHandler();
    dispatch(products(res.data?.products))
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;