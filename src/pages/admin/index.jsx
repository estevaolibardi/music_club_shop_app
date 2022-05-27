import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/AdminComponents/Header";
import InfoBlock from "../../components/AdminComponents/InfoBlocks";
import ListCostumers from "../../components/AdminComponents/ListOfCostumers";
import ListOrders from "../../components/AdminComponents/ListOfOrders";
import ListProducts from "../../components/AdminComponents/ListOfProducts";
import ShowOrderModal from "../../components/AdminComponents/showOrderModal";
import SideMenu from "../../components/AdminComponents/SideMenu";

import { useInfoAdmin } from "../../provider/info-admin";
import { useLoginAdmin } from "../../provider/login-admin";
import { AdminContainer } from "./style";

const AdminPage = () => {
  const { adminToken } = useLoginAdmin();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [currentOption, setCurrentOption] = useState("order");
  const openClose = () => setOpenSideMenu(!openSideMenu);
  const changeOption = (opt) => {
    if (openSideMenu) openClose();
    setCurrentOption(opt);
  };

  const {
    users,
    orders,
    products,
    getOrder,
    getProduct,
    getUser
  } = useInfoAdmin()


  useEffect(()=>{
    (async()=>{ 
      if(users.length===0) await getUser()
      if(orders.length===0) await getOrder()
      if(products.length===0) await getProduct()
  })()

  },[])


    if (!adminToken) {
      return <Navigate to={"/admin-login"}/>;
    }
  return (
    <AdminContainer>
      <SideMenu
        openSideMenu={openSideMenu}
        changeOption={changeOption}
        openClose={openClose}
      />
      <main>
       
        <AdminHeader openClose={openClose} />
        <InfoBlock />
        {currentOption === "order" ? (
          <ListOrders  />
        ) : currentOption === "customer" ? (
          <ListCostumers  />
        ) : (
          <ListProducts  />
        )}
      </main>
    </AdminContainer>
  );
};

export default AdminPage;
