import { useForm } from "react-hook-form";
import { useInfoAdmin } from "../../../provider/info-admin";
import AdminLoginInput from "../../AdminLoginInput";
import { ModalUpdateContainer } from "./style";
import {AiFillCloseCircle} from 'react-icons/ai'

const ModalProductUpdate = ({closeModalUpdate,productId}) => {
  const { register, handleSubmit } = useForm();
  const { updateProduct } = useInfoAdmin();



    const updProduct = async(data)=>{
        const request = {...data,rating:0}
        
        await updateProduct(request,productId)
    }

    

  return (
    <ModalUpdateContainer>
      <div className="modal">
        <div className="close" onClick={()=>closeModalUpdate()} > <AiFillCloseCircle/> </div>
        <form onSubmit={handleSubmit(updProduct)}>
          <h2>Atualizar produto</h2>
          <AdminLoginInput
            placeholder="Nome"
            name="name"
            legend="Nome"
            errors={""}
            register={register}
          />

          <AdminLoginInput
            placeholder="Preço"
            name="price"
            type='number'
            legend="Preço"
            errors={""}
            register={register}
          />

          <AdminLoginInput
            placeholder="Tipo"
            name="type"
            legend="Tipo"
            errors={""}
            register={register}
          />

          <AdminLoginInput
            placeholder="URL"
            name="img_url"
            legend="URL"
            errors={""}
            register={register}
          />

          <AdminLoginInput
            placeholder="Quantidade em estoque"
            name="quantity_stock"
            legend="Quantidade em estoque"
            errors={""}
            register={register}
          />

          <AdminLoginInput
            placeholder="Marca"
            name="label"
            legend="Marca"
            errors={""}
            register={register}
          />

            <AdminLoginInput
            placeholder="Descrição"
            name="description"
            legend="Descrição"
            errors={""}
            register={register}
          />
          <button type="submit">Atualizar</button>
        </form>
      </div>
    </ModalUpdateContainer>
  );
};
export default ModalProductUpdate;
