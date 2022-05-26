import { createContext, useContext, useEffect, useState } from "react";
import musicClubShopApi from "../../services/api";
export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [actualPage, setActualPage] = useState("/products?page=1&limit=15");

  useEffect(() => {
    musicClubShopApi
      .get(actualPage, { mode: "no-cors" })
      .then((res) => setProducts(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [actualPage]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        actualPage,
        setActualPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
