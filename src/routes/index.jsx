import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import User from "../pages/user";
import Shop from "../pages/shop";
import Cart from "../pages/cart";
import Chat from "../pages/chat";
import AdminPage from "../pages/admin";
import LoginAdminPage from "../pages/admin-login";
import Header from "../components/Header";
import News from "../pages/news";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-login" element={<LoginAdminPage />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default Router;
