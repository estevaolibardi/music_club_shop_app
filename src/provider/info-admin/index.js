import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import musicClubShopApi from "../../services/api";

const InfoAdminContext = createContext({});

export const InfoAdminProvider = ({ children }) => {
  const navigate = useNavigate();
  const [adminToken, setAdminToken] = useState(
    "" || localStorage.getItem("@AdminToken")
  );

  const [users, setUsers] = useState(
    [] || JSON.parse(localStorage.getItem("@UsersAdmin"))
  );
  const [orders, setOrders] = useState(
    [] || JSON.parse(localStorage.getItem("@OrdersAdmin"))
  );
  const [products, setProducts] = useState(
    [] || JSON.parse(localStorage.getItem("@ProductsAdmin"))
  );

  const getUser = async () => {
    
    await musicClubShopApi
      .get("/users", { headers: { authorization: `Bearer ${adminToken ? adminToken : localStorage.getItem("@AdminToken")}` } })
      .then((res) => {
        setUsers(res.data);
        localStorage.setItem("@UsersAdmin", JSON.stringify(res.data));
      });
  };

  const getOrder = async () => {
    await musicClubShopApi
      .get("/orders", { headers: { authorization: `Bearer ${adminToken ? adminToken : localStorage.getItem("@AdminToken")}` } })
      .then((res) => {
        setOrders(res.data);
        localStorage.setItem("@OrdersAdmin", JSON.stringify(res.data));
      });
  };

  const getProduct = async () => {
    await musicClubShopApi
      .get("/products", { headers: { authorization: `Bearer ${adminToken ? adminToken : localStorage.getItem("@AdminToken")}` } })
      .then((res) => {
        setProducts(res.data);
        localStorage.setItem("@ProductsAdmin", JSON.stringify(res.data));
      });
  };

  const updateOrderStatus = async (newStatus, id) => {
    await musicClubShopApi
      .patch(
        `/orders/${id}`,
        { status: newStatus },
        { headers: { authorization: `Bearer ${adminToken ? adminToken : localStorage.getItem("@AdminToken")}` } }
      )
      .then(async (res) => {
        await getOrder();
        toast.success("Status atualizado com sucesso!");
      })
      .catch((err) => toast.error("Erro ao atualizar status"));
  };

  const deleteProduct = async (id) => {
    await musicClubShopApi
      .delete(
        `products/${id}`,
        { mode: "no-cors",
        },
    { headers: { authorization: `Bearer ${adminToken ? adminToken : localStorage.getItem("@AdminToken")}` } },
      )
      .then(async (res) => {
        await getProduct();
        toast.success("Produto deletado com sucesso!");
      })
      .catch((err) => toast.error("Erro ao deletar produto"));
  };

  const createProduct = async(data)=>{
    await musicClubShopApi.post('/products',data,{ headers: { authorization: `Bearer ${adminToken ? adminToken : localStorage.getItem("@AdminToken")}`}}).then(async(res)=>{
        await getProduct()
        toast.success("Produto criado")
    }).catch((err) => toast.error("Erro ao criar produto"))
  }

  const updateProduct = async(data,id)=>{
    await musicClubShopApi.patch(`/products/${id}`,data,{ headers: { authorization: `Bearer ${adminToken ? adminToken : localStorage.getItem("@AdminToken")}`}}).then(async(res)=>{
        await getProduct()
        toast.success("Produto atualizado")
    }).catch((err) => toast.error("Erro ao atualizar produto"))
  }

  return (
    <InfoAdminContext.Provider
      value={{
        adminToken,
        users,
        orders,
        products,
        getOrder,
        getProduct,
        getUser,
        updateOrderStatus,
        deleteProduct,
        createProduct,
        updateProduct
      }}
    >
      {children}
    </InfoAdminContext.Provider>
  );
};
export const useInfoAdmin = () => useContext(InfoAdminContext);
