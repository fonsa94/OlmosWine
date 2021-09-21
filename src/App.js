import "./Estilos.css";
import  NavBar  from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/Items/ListContainer/ItemListContainer";
import ItemDetail from "./components/Items/ItemDetail";
function App() {
  return (
    
    <BrowserRouter >  
    <NavBar />
      <main>
        <Switch >
          <Route exact path='/' component={ItemListContainer}> Wines</Route>

          <Route exact path="/productos" component={ItemDetailContainer} />
      
            <Route exact path="/productos/categorias/:variedades" component={ItemDetailContainer} />

            <Route exact path="/productos/detalle/:id" component= {ItemDetail} />

         
        </Switch>
        </main>      
    </BrowserRouter>
  );
}

export default App;