import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import musicClubShopApi from "../../services/api";

const LoginContext = createContext([]);

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("@music-club: user") || false
  );

  const handleLogin = (data) => {
    musicClubShopApi
      .post("/users/login", data)
      .then((res) => {
        getUserInfo(res.data.token);
      })
      .catch((err) => toast.error("Login ou senha incorretos."));
  };

  const handleLogout = () => {
    toast.success(`Até mais ${user.name} ! :D`);
    localStorage.clear();
  };

  const getUserInfo = (token) => {
    localStorage.setItem("@music-club: token", JSON.stringify(token));
    musicClubShopApi
      .get("/users/profile", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        localStorage.setItem("@music-club: user", JSON.stringify(res.data));
        setUser(res.data);
        toast.success(`Bem vindo(a) ${res.data.name}! :D`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginContext.Provider value={{ handleLogin, user, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const UseLoginProvider = () => useContext(LoginContext);
