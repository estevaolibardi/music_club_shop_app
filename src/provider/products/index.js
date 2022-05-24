import { createContext, useContext, useEffect, useState } from "react";
import musicClubShopApi from "../../services/api";
export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    musicClubShopApi
      .get("/products", { mode: "no-cors" })
      .then((res) => setProducts(res.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, getAllProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
