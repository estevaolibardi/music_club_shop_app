import TextInput from "../TextInput";
import * as yup from "yup";
import { DivMain, FormContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseHandle } from "../../provider/register";

const RegisterForm = () => {
  const { handleRegister } = UseHandle();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório."),
    email: yup
      .string()
      .required("Email obrigatório.")
      .email("Insira um email válido."),
    user_name: yup.string().required("Username obrigatório"),
    birth_date: yup
      .date("Data inválida.")
      .required("Data de nascimento obrigatória."),
    password: yup
      .string()
      .required("Senha obrigatória.")
      .min(6, "Mínimo de 6 digitos.")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
        "Necessário números e pelo menos 1 letra minúscula e maiúscula"
      ),
    tel: yup
      .string()
      .required("Telefone obrigatório")
      .matches(
        /^\s*[(]?(\d{2})[-.) ]?(\d{5})[-. ]?(\d{4})[-. ]?\s*$/,
        "Insira um número válido"
      ),
    confirm_password: yup
      .string()
      .required("Confirme sua senha.")
      .oneOf([yup.ref("password")], "Senhas diferentes."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    delete data.confirm_password;
    handleRegister(data);
  };

  return (
    <DivMain>
      <h1>Cadastre-se!</h1>

      <FormContainer>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextInput
            labelName={"Nome"}
            register={register}
            name={"name"}
            type="text"
            error={errors.name?.message}
            borderColor={errors.name?.message ? "#e00000" : "#e07600"}
          />
          <TextInput
            labelName={"Email"}
            register={register}
            name="email"
            type="text"
            error={errors.email?.message}
            borderColor={errors.email?.message ? "#e00000" : "#e07600"}
          />
          <TextInput
            labelName={"Nome de usuário"}
            register={register}
            name="user_name"
            type="text"
            error={errors.user_name?.message}
            borderColor={errors.user_name?.message ? "#e00000" : "#e07600"}
          />
          <TextInput
            labelName={"Aniversário"}
            register={register}
            name="birth_date"
            type="date"
            error={errors.birth_date?.message}
            borderColor={errors.birth_date?.message ? "#e00000" : "#e07600"}
          />
          <TextInput
            labelName={"Telefone"}
            register={register}
            name="tel"
            type="tel"
            error={errors.tel?.message}
            borderColor={errors.tel?.message ? "#e00000" : "#e07600"}
          />
          <TextInput
            labelName={"Senha"}
            register={register}
            name="password"
            type="password"
            error={errors.password?.message}
            borderColor={errors.password?.message ? "#e00000" : "#e07600"}
          />
          <TextInput
            labelName={"Confirmar Senha"}
            register={register}
            name="confirm_password"
            type="password"
            error={errors.confirm_password?.message}
            borderColor={
              errors.confirm_password?.message ? "#e00000" : "#e07600"
            }
          />
          <button type="submit">Cadastrar!</button>
        </form>

        <p>Já possui cadastro?</p>
        <p>Entre agora mesmo!</p>
      </FormContainer>
    </DivMain>
  );
};

export default RegisterForm;
