import ItemDetail from "./components/Items/ItemDetail"
import { Item } from "./components/Items/ItemList"
import ItemListContainer from "./components/ListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import {Route} from "react-router-dom"
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer"
import ItemCount from "./components/Items/ItemCount"


const App = () => {

   
return (   
    <>    
<Route path="/" component={NavBar} />
<Route path="/category/id" component={ItemListContainer} />
<Route path="/item/id" component={ItemDetailContainer} />

    </>  
    )
}
 
export default App;
