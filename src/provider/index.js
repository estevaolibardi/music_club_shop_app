import { LoginProvider } from "./login";
import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";

const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <RegisterProvider>
        <LoginProvider>{children}</LoginProvider>
      </RegisterProvider>
    </ProductsProvider>
  );
};

export default Provider;
