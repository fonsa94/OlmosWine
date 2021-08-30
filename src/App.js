import ItemDetail from "./components/Items/ItemDetail"
import { Item } from "./components/Items/ItemList"
import ItemListContainer from "./components/ListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"



const App = () => {

   
return (   
    <>    
 <NavBar/>      
 <ItemListContainer nombre="marcer" apellido="perez"/> 
 <Item/> 
<ItemDetail/>
    </>
    
    )
}
 
export default App;
