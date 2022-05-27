import { createContext, useContext, useState } from "react";
import musicClubShopApi from "../../services/api";
import { toast } from "react-toastify";
import { UseLoginProvider } from "../login";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [user] = useState(
    JSON.parse(localStorage.getItem("@music-club: user") || false)
  );

  //const token = JSON.parse(localStorage.getItem("@music-club: token")) || "";

  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@music-club: token")) || ""
  );

  const getCart = (idCart) => {
    musicClubShopApi
      .get(`/cart/${idCart}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => setCart([...res.data.products]))
      .catch((err) => console.log(err.message));
  };

  const addToCart = (productId) => {
    musicClubShopApi
      .post(
        "/cart",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => setCart([...cart, res.data]))
      .catch((err) => {
        toast.error("Erro na requisição!");
        console.log(err.message);
      });
  };

  const removeFromCart = (toRemove) => {};

  return (
    <CartContext.Provider value={{ cart, getCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
