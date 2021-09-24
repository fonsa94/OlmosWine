import NavBar from "./components/NavBar/NavBar"
import  ItemDetailContainer  from "./components/Items/itemDetailContainer"
import ItemDetail from "./components/Items/itemDetail"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemlistContainer"
// import "./estilos.css"
function App() {
    return (
  
      <BrowserRouter >
        <div className="App">
      <NavBar />
          <Switch >
          <Route exact path='/' component={ItemListContainer}> Wines</Route>
  
            <Route exact path="/productos" component={ItemDetailContainer} />
  
              <Route exact path="/productos/categorias/:variedades" component={ItemDetailContainer} />
  
              <Route exact path="/productos/detalle/:id" component= {ItemDetail} />
  
  
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  export default App;