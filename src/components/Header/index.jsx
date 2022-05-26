import { Container, Input, Butn, BtnCart, RightPart } from "./styles";
import Logo from "../Logo";
import { BsFillCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import NavBar from "../NavBar";
import { BsFillPersonFill } from "react-icons/bs";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";


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
            <Link to="/cart">
              <BsFillCartFill size={22} />
            </Link>
          </BtnCart>
          <BtnCart>
            <Link to="/login">
              <BsFillPersonFill size={30} />
            </Link>
          </BtnCart>
          <BtnCart>
            <FiLogOut size={25} />
          </BtnCart>

        </RightPart>
      </section>
      <NavBar />
    </Container>
  );
};

export default Header;
