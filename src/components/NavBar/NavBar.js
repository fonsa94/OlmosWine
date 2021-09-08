import CartWidget from "../Cart/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {

   return (  
      
       <header id="main-header">
                <Link to="/"> <h1>Vinoteca Olmos</h1></Link>
                   <nav>
                      <Link to="/category/id"> <button>Categorias </button>  </Link>             
                      <Link to="/item/id"> <button>Items </button>  </Link>               
                     
                       
                   </nav>   
                   <CartWidget/>        
                                 
        </header>    
        
        )
}

export default NavBar