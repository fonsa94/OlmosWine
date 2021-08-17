import CartWidget from "./CartWidget"


const NavBar = () => {

   return (  
        <header id="main-header">
                 <h1>Vinoteca Olmos</h1>
                   <nav>
                      <a href="">Historia</a>                 
                      <a href="">Contacto</a>
                     
                   </nav>   
                   <CartWidget/>                        
        </header>    
            
        
        )
}

export default NavBar