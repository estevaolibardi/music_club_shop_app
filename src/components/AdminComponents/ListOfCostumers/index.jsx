import { FaEye } from "react-icons/fa"
import { ListCustomersContainer } from "./style"

const ListCostumers = ()=>{

    return(
        <ListCustomersContainer>
            <div className="section-title">
                <h2>
                    Clientes:
                </h2>
            </div>
               <div className="table-header line">
                   <p className="name">Nome</p>
                   <p className="price">Email</p>
                   <p className="status">User name</p>
                   <p className="typeOfPayment">Telefone</p>
                   <p className="edit">Ver Mais Detalhes</p>
               </div>
            <div className="table">


               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">24 99999-999</p>
                   <p className="edit"> <FaEye/> </p>
               </div>
            </div>
        </ListCustomersContainer>
    )
}
export default ListCostumers