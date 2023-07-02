import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Collection from './containers/Collection/Collection';
import Header from "./components/Header/Header";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import Carts from "./containers/Carts/Carts";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Collection />} /> 
          <Route path="/product-details/:id/:productId/:productTitle" element={<ProductDetails />} /> 
          <Route path="/carts" element={<Carts />} /> 
        </Routes>
    </div>
  );
}

export default App;
