import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ContainerUl } from "./styles";

const News = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    axios
      .get("http://api.vagalume.com.br/hotspots.php?apikey={key}")
      .then((response) => setNews(response.data.hotspots))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Header />
      <ContainerUl>
        {news ? (
          news.map((element) => (
            <li>
              <img src={element.art_pic_src} alt={element.artUrl}></img>
              <h4>
                <a href={element.link} target="_blank" rel="noreferrer">
                  {element.descr}
                </a>
              </h4>
              <p></p>
            </li>
          ))
        ) : (
          <div></div>
        )}
      </ContainerUl>
    </Container>
  );
};

export default News;
