import { ProductsProvider } from "./products";

const Provider = ({ children }) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Provider;
