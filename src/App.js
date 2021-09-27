import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemlistContainer'
import ItemDetailContainer from './components/itemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './providers/CartProvider'
import Categories from "./data/Categories.json"

function App() {
  return (
    <CartProvider>
      <BrowserRouter> 
        <NavBar categories={Categories} />
        <Switch> 
          <Route exact path={["/", "/category/:categoryId"]}>
            <ItemListContainer greeting={ <h1>Bienvenidos a OlmosWines</h1> }/>
          </Route>
          <Route exact path={"/item/:itemId"}>
            <ItemDetailContainer />
          </Route>
          <Route exact path={"/cart"}>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter> 
    </CartProvider>
  );
}

export default App;