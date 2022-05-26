import { Link } from "react-router-dom";
import { NavContainer, ContainerDownLink } from "./styles";
import { FaShopify } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";

const NavBar = () => {
  return (
    <NavContainer>
      <ContainerDownLink>
        <div>
          <FaShopify size={25} />
          <Link to="/shop">Shop</Link>
          <FaRegComments size={25} />
          <Link to="/chat"> Social</Link>
          <FaMusic size={20} />
          <Link to="/cifras"> Cifras</Link>
          <FaGuitar size={25} />
          <Link to="/user"> Perfil</Link>
          <FaRegNewspaper size={25} />
          <Link to="/noticias"> Notícias</Link>
        </div>
      </ContainerDownLink>
    </NavContainer>
  );
};

export default NavBar;
