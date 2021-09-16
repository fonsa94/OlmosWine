import "./Estilos.css";
import { NavBar } from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VinoInfo from "./components/Items/VinoInfo"
function App() {
  return (
    
    <BrowserRouter >
      <div className="App">
    <NavBar />
        <Switch >
          <Route exact path='/'> Wines</Route>

          <Route exact path="/productos" component={ItemDetailContainer} />
      
            <Route exact path="/productos/categorias/:variedades" component={ItemDetailContainer} />

            <Route exact path="/productos/detalle/:id" component= {VinoInfo} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;