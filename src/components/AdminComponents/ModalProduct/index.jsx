import { useForm } from "react-hook-form";
import { useInfoAdmin } from "../../../provider/info-admin";
import AdminLoginInput from "../../AdminLoginInput";
import { ModalContainer } from "./style";
import {AiFillCloseCircle} from 'react-icons/ai'

const ModalProductCreate = ({closeModalCreate}) => {
  const { register, handleSubmit } = useForm();
  const { createProduct } = useInfoAdmin();

    const creationProduct = async(data)=>{
        const request = {...data,rating:0}
        
        await createProduct(request)
    }

  return (
    <ModalContainer>
      <div className="modal">
        <div className="close" onClick={()=>closeModalCreate()} > <AiFillCloseCircle/> </div>
        <form onSubmit={handleSubmit(creationProduct)}>
          <h2>Criar novo produto</h2>
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
          <button type="submit">Criar</button>
        </form>
      </div>
    </ModalContainer>
  );
};
export default ModalProductCreate;
