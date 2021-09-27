import { useState, useEffect, useContext } from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import CartContext from './../context/CartContext';
import "../../src/css/NavBar.css" 
import M from "materialize-css"

function NavBar({ categories }) {
    const [loaded, setLoaded] = useState(false);
    const { cartSize } = useContext(CartContext);

    useEffect(() => {
        if(!loaded)
        {
            let elems = document.querySelectorAll('.dropdown-trigger'); 
            M.Dropdown.init(elems, {inDuration :300, outDuration :225 });          
            setLoaded(true);
        }
    }, [loaded]);

    return(
        <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          OlmosWines.
        </Link>
  
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link to="/*" className="nav-item nav-link">
              Quines somos
            </Link>
            <Link  to="/category/1" className="nav-item nav-link">
              Ofertas!
            </Link>
            <Link to="/category/2" className="nav-item nav-link">
              Proximamente
            </Link>
         
              
            
          </ul>
          <div className="widgets d-flex align-items-center">
            <div>
              <input type="text" placeholder="buscar" />
            </div>
            <div>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    );
  }
  

export default NavBar;