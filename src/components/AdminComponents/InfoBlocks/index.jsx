import { AiOutlineDollarCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { FaGuitar, FaUserFriends } from "react-icons/fa";
import { InfoBlockContainer } from "./style";
import {useInfoAdmin} from '../../../provider/info-admin'

const InfoBlock = () => {
  const {
    users,
    orders,
    products

  } = useInfoAdmin()
  return (
    <InfoBlockContainer>
      <div>
        <div>
          <p>{products.length ? products.length : 0}</p>
          <span>Total de Produtos</span>
        </div>
        <figure>
            <FaGuitar/>
        </figure>
      </div>

      <div>
        <div>
          <p>{orders.length ? orders.length : 0}</p>
          <span>Pedidos Realizados</span>
        </div>
        <figure>
            <AiOutlineShoppingCart/>
        </figure>
      </div>

      <div>
        <div>
          <p>R${products.length ? orders.reduce((acc,prod)=>acc+prod.buys.total,0): 0}</p>
          <span>Total em pedido</span>
        </div>
        <figure>
            <AiOutlineDollarCircle/>
        </figure>
      </div>

      <div>
        <div>
          <p>{users.length ? users.length : 0}</p>
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
