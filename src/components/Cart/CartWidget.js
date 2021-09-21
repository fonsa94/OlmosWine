import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import logoCartWidget from '../../components/Cart/Logo/carrito.png'

const CartWidget = () => {
    const { numberItems } = useContext(CartContext)
    return (
        <div className={`cartWidget ${numberItems > 0 ? 'visibleClass' : 'inVisibleClass'}`}>
            <img src={logoCartWidget} className="logoCartWidget" alt="Logo del Carrito de Compras" />
            <span className='totalItems'>{numberItems}</span>
        </div>
    )
}

export default CartWidget 