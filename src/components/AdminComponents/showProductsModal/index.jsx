import { ShowOrderModalContainer } from "../showOrderModal/style"
import {AiFillCloseCircle} from 'react-icons/ai'

const ShowProductModal = ({closeModal,product})=>{

    return(
        <ShowOrderModalContainer>
            <div className="modal">
                <div className="close" onClick={closeModal}><AiFillCloseCircle/></div>
                <h2>Informações sobre produto:</h2>
                <p>Nome: {product.name}</p>
                <p>Preço: R$ {product.price.toFixed(2)}</p>
                <p>Tipo: {product.type}</p>
                <p>Marca: {product.label}</p>
                <p>Descrição: {product.description}</p>
                <p>Quantidade em estoque: {product.quantity_stock}</p>
                <p>Criado: {product.create_at}</p>
                <p>Atualizado: {product.updated_at}</p>
            </div>

        </ShowOrderModalContainer>
    )

}
export default ShowProductModal