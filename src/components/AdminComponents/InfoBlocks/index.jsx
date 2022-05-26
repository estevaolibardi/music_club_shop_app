import { AiOutlineDollarCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { FaGuitar, FaUserFriends } from "react-icons/fa";
import { InfoBlockContainer } from "./style";

const InfoBlock = () => {
  return (
    <InfoBlockContainer>
      <div>
        <div>
          <p>102</p>
          <span>Total de Produtos</span>
        </div>
        <figure>
            <FaGuitar/>
        </figure>
      </div>

      <div>
        <div>
          <p>102</p>
          <span>Pedidos Realizados</span>
        </div>
        <figure>
            <AiOutlineShoppingCart/>
        </figure>
      </div>

      <div>
        <div>
          <p>102</p>
          <span>Total arrecadado</span>
        </div>
        <figure>
            <AiOutlineDollarCircle/>
        </figure>
      </div>

      <div>
        <div>
          <p>12</p>
          <span>Número de Usuários</span>
        </div>
        <figure>
            <FaUserFriends/>
        </figure>
      </div>
    </InfoBlockContainer>
  );
};
export default InfoBlock;
