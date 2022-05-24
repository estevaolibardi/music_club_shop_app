import { useProducts } from "../../provider/products";

const Shop = () => {
  const { products } = useProducts();
  console.log(products);
  return <div>shop</div>;
};

export default Shop;
