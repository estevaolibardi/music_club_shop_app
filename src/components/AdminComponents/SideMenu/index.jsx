import { SideMenuContainer } from "./style";
import { FiMusic } from "react-icons/fi";
import { FaGuitar, FaUserFriends } from "react-icons/fa";
import { BiLogOut, BiCog, BiArrowToLeft } from "react-icons/bi";
import { AiFillLock, AiOutlineDollar } from "react-icons/ai";
import { useLoginAdmin } from "../../../provider/login-admin/";


const SideMenu = ({ openSideMenu, openClose, changeOption }) => {
  const {logout} = useLoginAdmin()
  

  return (
    <SideMenuContainer openSideMenu={openSideMenu}>
      <ul className={openSideMenu ? "" : "closed"}>
        <li className="title-page">
          <FiMusic />
          <p>
            <span>Music Club Shop Admin Panel</span>
          </p>
        </li>


        <li onClick={() => changeOption("product")}>
          <FaGuitar />

          <p>
            <span>Produtos</span>
          </p>
        </li>


        <li onClick={() => changeOption("customer")}>
          <FaUserFriends />
          <p>
            <span>Clientes</span>
          </p>
        </li>


        <li onClick={() => changeOption("order")}>
          <AiOutlineDollar />
          <p>
            <span>Pedidos</span>
          </p>
        </li>
        <li>
          <AiFillLock />
          <p>
            <span>Redefinir Senha</span>
          </p>
        </li>

        <li>
          <BiCog />
          <p>
            <span>Configurações</span>
          </p>
        </li>

        <li onClick={()=>{
          logout()
        }}>
          <BiLogOut />
          <p>
            <span>Log Out</span>
          </p>
        </li>
      </ul>
      <div onClick={openClose} className="close_btn">
        <BiArrowToLeft />
      </div>
    </SideMenuContainer>
  );
};
export default SideMenu;
