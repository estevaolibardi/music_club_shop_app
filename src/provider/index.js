import { LoginProvider } from "./login";
import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";
import { CartProvider } from "./cart";

const Provider = ({ children }) => {
  return (
    <CartProvider>
      <ProductsProvider>
        <RegisterProvider>
          <LoginProvider>{children}</LoginProvider>
        </RegisterProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Provider;
