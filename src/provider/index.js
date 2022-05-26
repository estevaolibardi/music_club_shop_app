import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";

const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <RegisterProvider>{children}</RegisterProvider>
    </ProductsProvider>
  );
};

export default Provider;
