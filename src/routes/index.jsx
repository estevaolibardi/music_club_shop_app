import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/register";
import User from "../pages/user";
import Shop from "../pages/Shop/index.jsx";
import Cart from "../pages/cart";
import Chat from "../pages/chat";
import AdminPage from "../pages/admin";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
        <Route exact path='/admin'>
          <AdminPage/>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
