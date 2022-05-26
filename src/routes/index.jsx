import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/register";
import User from "../pages/user";
import Shop from "../pages/Shop";
import Cart from "../pages/cart";
import Chat from "../pages/chat";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
