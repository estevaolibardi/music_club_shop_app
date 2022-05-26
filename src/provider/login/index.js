import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import musicClubShopApi from "../../services/api";

const LoginAdminContext = createContext({});

export const LoginProvider = ({ children }) => {

  const login = async ({ email, password }) => {
    await musicClubShopApi.post("/users/login", { email, password })
    .then(async (res)=>{
        const token = res.data.token
        await musicClubShopApi.get('/users/profile',{headers:{authorization:`Bearer ${token}`}})
        .then(res=>{
            const is_adm = res.data.is_adm
            if(is_adm===false){
                toast.error('Erro no login')
            }else{
                toast.success('Login feito com sucesso')

                
            }
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
  };


  return (
    <LoginAdminContext.Provider value={{ login }}>
      {children}
    </LoginAdminContext.Provider>
  );
};
export const useLoginAdmin = () => useContext(LoginAdminContext);
