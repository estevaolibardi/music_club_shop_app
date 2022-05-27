import { FaEdit, FaTrash } from "react-icons/fa";
import { ListProductsContainer } from "./style";
import { BsEyeFill } from "react-icons/bs";
import { useInfoAdmin } from "../../../provider/info-admin";
import ShowProductModal from '../showProductsModal'
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ModalProductCreate from "../ModalProduct";
import ModalProductUpdate from "../ModalProductUpdate";


const ListProducts = () => {
  const { users, orders, products, deleteProduct } = useInfoAdmin();

  const [openedModal,setOpenedModal] = useState(false)
  const [product,setProduct] = useState({})
  const closeModal = ()=>setOpenedModal(false)
  const closeConfirmationModal = ()=>setOpenConfirmationModal(false)

  const [openConfirmationModal,setOpenConfirmationModal] =useState(false)
  const [prodId,setProdId] = useState('')

  const [openModalCreate,setOpenModalCreate]=useState(false)
  const closeModalCreate =()=> setOpenModalCreate(false)


  const [openModalUpdate,setOpenModalUpdate]=useState(false)
  const closeModalUpdate =()=> setOpenModalUpdate(false)

  const [productId,setProductId]=useState('')

  return (
    <ListProductsContainer>
      <div className="section-title">
        <h2>Produtos:</h2>
        <button onClick={()=>setOpenModalCreate(true)}>Adicionar</button>
      </div>
      <div className="table-header line">
        <p className="name">Nome Produto</p>
        <p className="price">Preço</p>
        <p className="qtd_in_stock">Quantidade em Estoque</p>
        <p className="details">Ver mais Detalhes</p>
        <p className="edit">Editar</p>
        <p className="exclude">Excluir</p>
      </div>
      <div className="table">


        {products.map((prod) => (
          <div className="table-line line"  key={prod.id}>
            <p className="name">{prod.name}</p>
            <p className="price">R${prod.price.toFixed(2)}</p>
            <p className="qtd_in_stock">{prod.quantity_stock}</p>
            <p className="details" onClick={()=>{
              setOpenedModal(true)
              setProduct(prod)
            }}>
              {" "}
              <BsEyeFill />{" "}
            </p>
            <p className="edit" onClick={()=>{
              setOpenModalUpdate(true)
              setProductId(prod.id)
            }}>
              {" "}
              <FaEdit />{" "}
            </p>
            <p className="exclude" onClick={()=>{
              setOpenConfirmationModal(true)
              setProdId(prod.id)
            }}>
              {" "}
              <FaTrash />{" "}
            </p>
          </div>
        ))}
      </div>

      {openModalCreate && (
        <ModalProductCreate closeModalCreate={closeModalCreate}/>
      )}

        {openModalUpdate && (
          <ModalProductUpdate closeModalUpdate={closeModalUpdate} productId={productId}/>
        )}

      {openConfirmationModal && (
      <div className="modal-confirmation">
        <div className="modal-confirmation-window">
          <div className="close" onClick={()=>closeConfirmationModal()}> <AiFillCloseCircle/> </div>
          <h2>Você deseja deletar o produto?</h2>
          <div className="button-modal">
          <button onClick={async()=>{
            await deleteProduct(prodId)
            setOpenConfirmationModal(false)
          }}>Deletar</button>
          <button onClick={()=>closeConfirmationModal()}>Cancelar</button>
          </div>
        </div>
      </div>
      )}
      {openedModal && <ShowProductModal product={product} closeModal={closeModal}/>}
    
    </ListProductsContainer>
  );
};
export default ListProducts;
