import { FaEdit } from "react-icons/fa";
import { ListProductsContainer } from "./style";
import {BsEyeFill} from 'react-icons/bs'
const ListProducts = () => {
  return (
    <ListProductsContainer>
      <div className="section-title">
        <h2>Produtos:</h2>
        <button>Adicionar</button>
      </div>
      <div className="table-header line">
        <p className="name">Nome Produto</p>
        <p className="price">Preço</p>
        <p className="qtd_in_stock">Quantidade em Estoque</p>
        <p className="details">Ver mais Detalhes</p>
        <p className="edit">Editar</p>
      </div>
      <div className="table">
        <div className="table-line line">
          <p className="name">Gabriel</p>
          <p className="price">R$ 12.50</p>
          <p className="qtd_in_stock">22</p>
          <p className="details"> <BsEyeFill/> </p>
          <p className="edit">
            {" "}
            <FaEdit />{" "}
          </p>
        </div>
      </div>
    </ListProductsContainer>
  );
};
export default ListProducts;
