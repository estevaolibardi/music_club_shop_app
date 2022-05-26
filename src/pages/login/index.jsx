import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import { MainContainer } from "./style";

const Login = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <LoginForm />
      </MainContainer>
    </>
  );
};

export default Login;
