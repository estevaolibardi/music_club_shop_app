import { LoginProvider } from "./login";
import { LoginAdminProvider } from "./login-admin";
import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";

const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <RegisterProvider>
        <LoginAdminProvider>
          <LoginProvider>{children}</LoginProvider>
        </LoginAdminProvider>
      </RegisterProvider>
    </ProductsProvider>
  );
};

export default Provider;
