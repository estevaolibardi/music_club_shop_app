import { useCart } from "../../provider/cart";
import Header from "../../components/Header";

const Cart = () => {
  const { cart, getCart } = useCart();
  console.log(cart);

  getCart();

  return (
    <div>
      <Header />

      <h1>Adicione produtos ao carrinho para vê-los aqui</h1>
    </div>
  );
};

export default Cart;
