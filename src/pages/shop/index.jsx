import { useProducts } from "../../provider/products";
import { Container } from "./styles";

const Shop = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <Container>
      {products.map((element) => (
        <li key={element.id}>
          <img alt={element.name} src={element.img_url} />
          <p>{element.name}</p>
          <h4>{`R$ ${element.price.toFixed(2)}`}</h4>
          <p>{element.description}</p>
        </li>
      ))}
    </Container>
  );
};

export default Shop;
