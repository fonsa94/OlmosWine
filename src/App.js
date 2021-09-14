import "./Estilos.css";
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter >
      <div className="App">
    <NavBar />
        <Switch >
          <Route exact path='/'> Wines</Route>

          <Route path="/:category/:id" component={ItemDetailContainer} />

            <Route path="/:category" component={ItemListContainer} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;