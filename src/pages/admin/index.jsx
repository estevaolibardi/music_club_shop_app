import { useState } from "react";
import AdminHeader from "../../components/AdminComponents/Header";
import InfoBlock from "../../components/AdminComponents/InfoBlocks";
import ListCostumers from "../../components/AdminComponents/ListOfCostumers";
import ListOrders from "../../components/AdminComponents/ListOfOrders";
import ListProducts from "../../components/AdminComponents/ListOfProducts";
import SideMenu from "../../components/AdminComponents/SideMenu";
import { AdminContainer } from "./style";

const AdminPage = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [currentOption, setCurrentOption] = useState("order");
  const openClose = () => setOpenSideMenu(!openSideMenu);
  const changeOption = (opt) =>{
      if(openSideMenu) openClose()
       setCurrentOption(opt)
    };

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
        {currentOption === "order" ? <ListOrders /> :(currentOption === "customer" ? <ListCostumers/> :<ListProducts />)}
      </main>
    </AdminContainer>
  );
};

export default AdminPage;
