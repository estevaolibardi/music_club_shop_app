import { createContext, useContext } from "react";
import musicClubShopApi from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext([]);

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleRegister = (data) => {
    musicClubShopApi
      .post("/users", data)
      .then((res) => {
        toast.success("Cadastro realizado!");
        navigate("/login");
      })
      .catch((err) =>
        toast.error("Algo deu errado, verifique o email ou nome de usuário.")
      );
  };

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const UseHandle = () => useContext(RegisterContext);
