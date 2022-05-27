import { InfoAdminProvider } from "./info-admin";
import { LoginProvider } from "./login";
import { LoginAdminProvider } from "./login-admin";
import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";
import { CartProvider } from "./cart";

const Provider = ({ children }) => {
  return (
    <CartProvider>
      <ProductsProvider>
        <RegisterProvider>
          <LoginAdminProvider>
            <InfoAdminProvider>
              <LoginProvider>{children}</LoginProvider>
            </InfoAdminProvider>
          </LoginAdminProvider>
        </RegisterProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Provider;
