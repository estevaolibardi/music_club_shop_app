import Header from "../../components/Header";
import { ContainerProfile, Container } from "./styles";
import { UseLoginProvider } from "../../provider/login";

const User = () => {
  const { user } = UseLoginProvider();
  const actualUser = JSON.parse(user);
  console.log(actualUser);

  return (
    <div>
      <Header />
      <Container>
        <ContainerProfile>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            alt="foto-perfil"
          />
          <h3>{actualUser.user_name}</h3>
          <p>{actualUser.birth_date}</p>
        </ContainerProfile>
        <div>produtos comprados</div>
      </Container>
    </div>
  );
};

export default User;
