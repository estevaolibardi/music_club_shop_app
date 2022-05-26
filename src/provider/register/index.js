import { createContext, useContext, useState } from "react";
import musicClubShopApi from "../../services/api";

export const RegisterContext = createContext([]);

export const RegisterProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleRegister = (data) => {
    musicClubShopApi
      .post("/users", data)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const UseHandle = () => useContext(RegisterContext);
