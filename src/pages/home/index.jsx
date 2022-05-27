import { Container, Content, Footer, BannerInfo } from "./styles";
import Banner from "../../assets/Banner.jpg";
import Header from "../../components/Header";
import Credit from "../../assets/credit-card.webp";
import Warrant from "../../assets/waranty.webp";
import Discont from "../../assets/discountt.webp";
import Money from "../../assets/money.webp";

const Home = () => {
  return (
    <Container>
      <div>
        <Header />
      </div>

      <Content>
        <section>
          <figure>
            <img src={Banner} alt="logo" />
          </figure>
        </section>
      </Content>

      <BannerInfo>
        <div>
          <div>
            <img src={Credit} alt="logo" />
            <p>
              <span>Parcelamento</span> em até 10x sem juros
            </p>
          </div>
          <div>
            <img src={Warrant} alt="logo" />
            <p>
              <span>Produtos Originais</span> com garantia e nota fiscal
            </p>
          </div>
          <div>
            <img src={Discont} alt="logo" />
            <p>
              <span>Descontos de até 10%</span> nas compras à vista
            </p>
          </div>
          <div>
            <img src={Money} alt="logo" />
            <p>
              <span>Preços Exclusivos</span> para site e televendas
            </p>
          </div>
        </div>
      </BannerInfo>

      <Footer>
        <div></div>
      </Footer>
    </Container>
  );
};
export default Home;
