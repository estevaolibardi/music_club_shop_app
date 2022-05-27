import { useCart } from "../../provider/cart";
import Header from "../../components/Header";
import { UseLoginProvider } from "../../provider/login";
import { useEffect } from "react";

const Cart = () => {
  const { cart, getCart } = useCart();

  const { user } = UseLoginProvider();
  const actualUser = JSON.parse(user);
  //console.log(actualUser);

  useEffect(() => {
    getCart(actualUser.cart.id);
  }, []);

  /*{cart.products.map((product, index) => (
    <div key={index}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>{product.price}</span>
    </div>
  ))}*/

  console.log(cart);

  return (
    <div>
      <Header />

      {/* {cart.length > 0 ? (
        cart.map((product, index) => (
          <div key={index}>
            <img src={product.product.img_url} alt={product.product.name} />
            <h3>{product.product.name}</h3>
            <p>{product.product.description}</p>
            <span>{product.product.price}</span>
            <span>{product.quantity}</span>
          </div>
        ))
      ) : (
        <h1>Sem produtos</h1>
      )} */}

      <h1>Adicione produtos ao carrinho para vê-los aqui</h1>
    </div>
  );
};

export default Cart;
