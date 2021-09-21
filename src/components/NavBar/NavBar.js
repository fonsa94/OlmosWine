import React from 'react'

import  CartWidget  from '../../components/Cart/cartWidget'
import { Link } from 'react-router-dom'
function NavBar() {

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to='/'>
                    <img/>
                </Link>
            </div>
            <div className="container">
                <ul className="navbar-container">
                    <li className='nav-link'>
                        <Link to='/categories' >
                            Categorias
                        </Link>
                    </li>
                    <li className="nav-link"><Link to='/ofertas' >
                        Ofertas
                    </Link></li>
                </ul>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
            </div>

        </nav>
    )
}

export default NavBar 