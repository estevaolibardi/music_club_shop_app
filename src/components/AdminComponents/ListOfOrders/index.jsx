import { FaEye } from "react-icons/fa"
import { ListOrdersContainer } from "./style"

const ListOrders = ()=>{

    return(
        <ListOrdersContainer>
            <div className="section-title">
                <h2>
                    Pedidos:
                </h2>
            </div>
               <div className="table-header line">
                   <p className="name">Nome</p>
                   <p className="price">Total</p>
                   <p className="status">Status</p>
                   <p className="typeOfPayment">Tipo de Pagamento</p>
                   <p className="edit">Ver Detalhes</p>
               </div>
            <div className="table">


               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>


                

               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>
               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>
               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>
               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>
               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>
               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>
               <div className="table-line line">
                   <p className="name">Gabriel</p>
                   <p className="price">R$ 12.50</p>
                   <p className="status">Processando</p>
                   <p className="typeOfPayment">Boleto</p>
                   <p className="edit"> <FaEye/> </p>
               </div>

            </div>


        </ListOrdersContainer>
    )

}
export default ListOrders