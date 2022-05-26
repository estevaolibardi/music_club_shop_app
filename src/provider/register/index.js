import { createContext, useContext, useState } from "react";
import musicClubShopApi from "../../services/api";
import { toast } from "react-toastify";
import { navigate } from "react-router-dom";

export const RegisterContext = createContext([]);

export const RegisterProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleRegister = (data) => {
    musicClubShopApi
      .post("/users", data)
      .then((res) => {
        toast.success("Cadastro realizado!");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const UseHandle = () => useContext(RegisterContext);
