import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerse";
import { Navbar, Products } from "./components";

function App() {
  const [products, setProducts] = useState([]);

  // Fetch products from the api
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
}

export default App;
