// import "./App.css";
import { NavBar } from "../Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  {ItemListContainer}  from "./components/Item/ItemDetailContainer";
import {ItemDetailContainer} from "./components/Item/ItemListContainer";
import { Cart}  from "./components/cart";
import {CartProvider} from "./context/CartContext.js";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer}></Route>
          <Route exact path="/category/:id" component={ItemListContainer}></Route>
          <Route exact path="/item/:id" component={ItemDetailContainer}></Route>
          <Route exact path="/cart" component={Cart}></Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;