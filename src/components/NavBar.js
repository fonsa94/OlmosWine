import { useState, useEffect, useContext } from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import CartContext from './../context/CartContext';


function NavBar({ categories }) {
    const [loaded, setLoaded] = useState(false);
    const { cartSize } = useContext(CartContext);

    useEffect(() => {
        if(!loaded)
        {
            let elems = document.querySelectorAll('.dropdown-trigger');           
            setLoaded(true);
        }
    }, [loaded]);

    return(
        <>
            <ul id="dropdown1" className="dropdown-content">
                <li><Link to={"/"}> Todo </Link></li>
                <li className="divider"></li>
                {
                    categories.map(category => {
                        return (
                            <li key={category.id}><Link to={`/category/${category.id}`}> { category.name } </Link></li>
                        )
                    })
                }
            </ul>
            <nav>
                <div className="nav-fixed">
                    <Link to={"/"} className="brand-logo"> Olmos Wines</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/"}> Inicio </Link></li>
                        <li><a href="#" className='dropdown-trigger' data-target='dropdown1'>Productos <i className="material-icons right">arrow_drop_down</i></a></li>
                        { cartSize > 0 && <li><CartWidget/></li> }
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default NavBar;