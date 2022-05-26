import { Container, Input, Butn, BtnCart, RightPart } from "./styles";
import Logo from "../Logo";
import { BsFillCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import NavBar from "../NavBar";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <section>
        <Logo />
        <RightPart>
          <Input placeholder="O que procura hoje?"></Input>
          <Butn type="button">
            {" "}
            <FaSearch />
          </Butn>
          <BtnCart>
            <BsFillCartFill size={22} />
          </BtnCart>
          <BtnCart>
            <BsFillPersonFill size={30} />
          </BtnCart>
        </RightPart>
      </section>
      <NavBar />
    </Container>
  );
};

export default Header;
