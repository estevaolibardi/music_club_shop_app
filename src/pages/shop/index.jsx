import { useState } from "react";
import { useProducts } from "../../provider/products";
import {
  Container,
  Button,
  ContainerFull,
  ContainerButton,
  ContainerDescription,
} from "./styles";
import Header from "../../components/Header";

const Shop = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { products, setActualPage } = useProducts();

  console.log(products);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    setActualPage(`/products?page=${pageNumber + 1}&limit=15`);
  };
  const handlePreviousPage = () => {
    if (pageNumber - 1 !== 0) {
      setPageNumber(pageNumber - 1);
      setActualPage(`/products?page=${pageNumber - 1}&limit=15`);
    }
  };

  return (
    <>
      <Header />
      <ContainerFull>
        <h1>Shop Page, products bellow</h1>
        <Container>
          {products.products ? (
            products.products.map((element) => (
              <li key={element.id}>
                <img alt={element.name} src={element.img_url} />
                <p>{element.name}</p>
                <h4>{`R$ ${element.price.toFixed(2)}`}</h4>
                <ContainerDescription>
                  <p>{element.description}</p>
                </ContainerDescription>
              </li>
            ))
          ) : (
            <div>Sem produtos</div>
          )}
        </Container>
        <ContainerButton>
          <Button children="página anterior" onClick={handlePreviousPage} />
          <Button children="próxima página" onClick={handleNextPage} />
        </ContainerButton>
      </ContainerFull>
    </>
  );
};

export default Shop;
