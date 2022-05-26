import Header from "../../components/Header";
import { ContainerProfile, Container } from "./styles";

const User = () => {
  return (
    <div>
      <Header />
      <Container>
        <ContainerProfile>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            alt="foto-perfil"
          />
          <h3>Nome</h3>
        </ContainerProfile>
      </Container>
    </div>
  );
};

export default User;
