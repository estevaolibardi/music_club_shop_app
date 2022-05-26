import { Container, Btn } from "./styles";
import { Link } from "react-router-dom";
import Logomarca from "../../assets/Logomarca.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Logo = () => {
  return (
    <Container>
      <div>
        <Btn type="button">
          <GiHamburgerMenu size={25} />{" "}
        </Btn>
        <div>
          <Link to="/"> <h2>music club shop</h2></Link>
          <img src={Logomarca} alt="logo" />
        </div>
      </div>
    </Container>
  );
};

export default Logo;
