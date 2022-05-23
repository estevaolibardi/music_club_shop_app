import { Container } from "./styles";
import { Link } from "react-router-dom";
import PngWing from "../../assets/pngwing.com.png";

const Logo = () => {
  return (
    <Container>
      <Link to="/">Music Club Shop</Link>
      <img src={PngWing} alt="logo" />
    </Container>
  );
};

export default Logo;
