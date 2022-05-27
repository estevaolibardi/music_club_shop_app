import { useState } from "react"
import { FaEye } from "react-icons/fa"
import { useInfoAdmin } from "../../../provider/info-admin"
import ShowOrderModal from "../showOrderModal"
import { ListOrdersContainer } from "./style"

const ListOrders = ()=>{
    const {
        users,
        orders,
        products,
        updateOrderStatus
      } = useInfoAdmin()
    const [openedModal,setOpenedModal] = useState(false)
    const [order,setOrder] = useState({})
    const closeModal = ()=>setOpenedModal(false)
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
                   <p className="typeOfPayment">Tipo de Pagamento</p>
                   <p className="status">Status</p>
                   <p className="edit">Ver Detalhes</p>
                   <p className="change-status">Alterar Status</p>
               </div>
            <ul className="table">


                {orders.map(order=>(
                <div className="table-line line" key={order.id}>
                   <p className="name">{order.user.name}</p>
                   <p className="price">R$ {order.buys.total.toFixed(2)}</p>
                   <p className="typeOfPayment">{order.typeOfPayment}</p>
                   <p className="status">{order.status}</p>
                   <p className="edit" onClick={()=>{
                       setOpenedModal(true)
                       setOrder(order)
                   }}> <FaEye/> </p>
                   <p className="change-status">
                       <select name="" id="" onChange={ async(e)=>{
                           await updateOrderStatus(e.target.value,order.id)
                           
                           }}>
                           <option value="Enviado">Enviado</option>
                           <option value="Cancelado">Cancelado</option>
                           <option value="Entregue">Entregue</option>
                           <option value="Pendente">Pendente</option>
                           <option value="Concluído">Concluído</option>
                           <option value="Concluído">Pago</option>
                       </select>
                   </p>

                </div>
                ))}
                
              
            </ul>
            {openedModal && <ShowOrderModal closeModal={closeModal} order={order}/>}
            

        </ListOrdersContainer>
    )

}
export default ListOrders