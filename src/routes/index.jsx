import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import User from "../pages/user";
import Shop from "../pages/Shop/index.jsx";
import Cart from "../pages/cart";
import Chat from "../pages/chat";
import AdminPage from "../pages/admin";
import LoginAdminPage from "../pages/admin-login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default Router;
