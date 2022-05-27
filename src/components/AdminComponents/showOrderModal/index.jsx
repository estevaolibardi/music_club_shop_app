import { ShowOrderModalContainer } from "./style"
import {AiOutlineClose} from 'react-icons/ai'

const ShowOrderModal = ({order,closeModal})=>{

    return(
        <ShowOrderModalContainer>
            <div className="modal">
                <div className="close" onClick={()=>closeModal()}> <AiOutlineClose/> </div>

                <h2>Informações de contato do Cliente</h2>
                <p><strong>Nome:</strong>  {order.user.name}</p>
                <p><strong>Email:</strong>  {order.user.email}</p>
                <p><strong>Telefone:</strong>  {order.user.tel}</p>

                <h2>Endereço de entrega</h2>
                <p><strong>CEP:</strong>  {order.address.cep}</p>
                <p><strong>Cidade:</strong>  {order.address.city}</p>
                <p><strong>País:</strong>  {order.address.country}</p>
                <p><strong>Bairro:</strong>  {order.address.neighborhood}</p>
                <p><strong>Complemento:</strong>  {order.address.complement}</p>
                <p><strong>Número:</strong>  {order.address.number}</p>
                <p><strong>Rua:</strong>  {order.address.street}</p>

                <h2>Produtos Comprados</h2>
                <ul>

                {order.buys.products.map(prod=>
                    (<li key={prod.id}>
                        <p>
                       <strong>Produto:</strong>  {prod.product.name},
                        </p>
                        <p>
                       <strong> Preço: </strong>  R$ {prod.product.price.toFixed(2)},
                       <strong> Qtd: </strong>  {prod.quantity}
                        </p>
                    </li>))}

                </ul>
                <p><strong>Total:</strong>  R$ {order.buys.total.toFixed(2)}</p>

                <h2>Tipo de Pagamento</h2>
                <p>{order.typeOfPayment}</p>
                <h2>Status do pedido</h2>
                <p>{order.status}</p>

            </div>
        </ShowOrderModalContainer>
    )

}
export default ShowOrderModal