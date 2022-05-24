import TextInput from "../TextInput";
import * as yup from "yup";
import { DivMain, FormContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório."),
    email: yup
      .string()
      .required("Email obrigatório.")
      .email("Insira um email válido."),
    user_name: yup.string().required("Username obrigatório"),
    birth_date: yup.date(),
    password: yup.string().required("Senha obrigatória"),
    tel: yup
      .string()
      .required()
      .matches(
        /^\s*[(]?(\d{2})[-.) ]?(\d{5})[-. ]?(\d{4})[-. ]?\s*$/,
        "Insira um número válido"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <DivMain>
      <h1>Cadastro</h1>

      <FormContainer>
        <form>
          <TextInput
            labelName={"Nome"}
            register={register}
            name={"name"}
            borderColor={errors.email?.message ? "#e00000" : "#e07600"}
          />
        </form>
      </FormContainer>
    </DivMain>
  );
};

export default RegisterForm;
