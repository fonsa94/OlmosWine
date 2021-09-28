import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getFirestore } from './firebase/index';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemlistContainer'
import ItemDetailContainer from './components/itemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './providers/CartProvider'

const db = getFirestore();
const itemCollection = db.collection('categories');

function App() {

  
  const[categories, setCategories] = useState([]);


  
  useEffect(() => {
    let callback = (querySnapshot) => {   
      setCategories(querySnapshot.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;

          return data;
      }));
    };

    itemCollection.get().then(callback);
  }, []);


  return (
    <CartProvider>
      <BrowserRouter> 
        <NavBar categories={categories} />
        <Switch> 
          <Route exact path={["/", "/category/:categoryId"]}>
            <ItemListContainer greeting={ <h1>Bienvenido a OlmosWine!</h1> }/>
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