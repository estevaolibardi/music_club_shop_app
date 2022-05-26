import { useForm } from "react-hook-form";
import TextInput from "../TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  DivContainer,
  DivCreateText,
  ForgetPassword,
  MainContainer,
} from "./style";
import { Link } from "react-router-dom";
import { UseLoginProvider } from "../../provider/login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const { handleLogin, user } = UseLoginProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obigatório.")
      .email("Insira um email válido."),
    password: yup.string().required("Senha obrigatória."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitLogin = (data) => {
    handleLogin(data);
  };

  return (
    <DivContainer>
      <h1>Log-In</h1>

      <MainContainer>
        <form onSubmit={handleSubmit(submitLogin)}>
          <TextInput
            labelName={"Email"}
            error={errors.email?.message}
            borderColor={errors.email?.message ? "#e00000" : "#e07600"}
            register={register}
            name={"email"}
          />
          <TextInput
            labelName={"Senha"}
            error={errors.password?.message}
            borderColor={errors.password?.message ? "#e00000" : "#e07600"}
            register={register}
            name={"password"}
            type="password"
          />
          <ForgetPassword>Esqueci minha senha</ForgetPassword>

          <button type="submit">Login</button>
        </form>
      </MainContainer>
      <DivCreateText>
        <p>Não possui uma conta?</p>
        <Link to="/register">Cadastre-se aqui!</Link>
      </DivCreateText>
    </DivContainer>
  );
};

export default LoginForm;
