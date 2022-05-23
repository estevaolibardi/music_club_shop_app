import { Container } from "./styles";

const BurguerMenu = ({ wrapperFunction }) => {
  return (
    <Container onClick={wrapperFunction}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BurguerMenu;
