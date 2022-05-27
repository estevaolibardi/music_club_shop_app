import { FaEye } from "react-icons/fa";
import { useInfoAdmin } from "../../../provider/info-admin";
import { ListCustomersContainer } from "./style";

const ListCostumers = () => {
  const { users, orders, products } = useInfoAdmin();
  return (
    <ListCustomersContainer>
      <div className="section-title">
        <h2>Clientes:</h2>
      </div>
      <div className="table-header line">
        <p className="name">Nome</p>
        <p className="email">Email</p>
        <p className="user_name">User name</p>
        <p className="tel">Telefone</p>
        <p className="birth_date">Ver Mais Detalhes</p>
      </div>
      <div className="table">


        {users.map((user) => (
          <div className="table-line line"  key={user.id}>
            <p className="name">{user.name}</p>
            <p className="email">{user.email}</p>
            <p className="user_name">{user.user_name}</p>
            <p className="tel">{user.tel}</p>
            <p className="birth_date">{user.birth_date}</p>
          </div>
        ))}

        {/* <div className="table-line line">
          <p className="name">Gabriel</p>
          <p className="email">R$ 12.50</p>
          <p className="status">Processando</p>
          <p className="typeOfPayment">24 99999-999</p>
          <p className="edit">
            {" "}
            <FaEye />{" "}
          </p>
        </div> */}


      </div>
    </ListCustomersContainer>
  );
};
export default ListCostumers;
