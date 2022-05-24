import { useProducts } from "../../provider/products";

const Shop = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <div>
      {products.map((element) => (
        <li key={element.id}>
          <img alt={element.name} src={element.img_url} />
          <p>{element.name}</p>
          <h4>{element.price}</h4>
          <p>{element.description}</p>
        </li>
      ))}
    </div>
  );
};

export default Shop;
