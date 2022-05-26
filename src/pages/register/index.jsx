import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import { MainContainer } from "./style";

const Register = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <RegisterForm />
      </MainContainer>
    </>
  );
};

export default Register;
