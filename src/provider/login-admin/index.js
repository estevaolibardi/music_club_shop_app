import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import musicClubShopApi from "../../services/api";

const LoginAdminContext = createContext({});

export const LoginAdminProvider = ({ children }) => {
  const navigate = useNavigate()
  const [adminToken,setAdminToken] = useState('' || localStorage.getItem('@AdminToken'))

  const logout = ()=>{
    localStorage.clear()
    setAdminToken()
    navigate('')
    toast('Logout feito')

  }

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
                setAdminToken(token)
                localStorage.setItem("@AdminToken",token)
                navigate('/admin')
                toast.success('Login feito com sucesso')
                
            }
        })
        .catch(err=>toast.error('Erro no login 500'))
    })
    .catch(err=>toast.error('Erro no login'))
  };


  return (
    <LoginAdminContext.Provider value={{ login,adminToken,logout }}>
      {children}
    </LoginAdminContext.Provider>
  );
};
export const useLoginAdmin = () => useContext(LoginAdminContext);