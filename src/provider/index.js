import { InfoAdminProvider } from "./info-admin";
import { LoginProvider } from "./login";
import { LoginAdminProvider } from "./login-admin";
import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";

const Provider = ({ children }) => {
  return (
    <ProductsProvider>
      <RegisterProvider>
        <LoginAdminProvider>
          <InfoAdminProvider>
            <LoginProvider>{children}</LoginProvider>
          </InfoAdminProvider>
        </LoginAdminProvider>
      </RegisterProvider>
    </ProductsProvider>
  );
};

export default Provider;
