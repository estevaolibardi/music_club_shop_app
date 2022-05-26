import { LoginProvider } from "./login";
import { ProductsProvider } from "./products";

const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <LoginProvider>{children}</LoginProvider>
    </ProductsProvider>
  );
};

export default Provider;
