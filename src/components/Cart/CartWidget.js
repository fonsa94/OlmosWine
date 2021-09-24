import React ,{useContext} from "react";
import {CartContext} from "../../context/cartContext";


const CartWidget = () => {
      const {numberItem} = useContext(CartContext)
    return (
      <div className={`cartWidget ${numberItem > 0 ? 'visibleClass' : 'inVisibleClass'}`}>
  
      <a href="#" className="material-icons">shopping_cart</a>

 
      <span className='totalItems'>{numberItem}</span>
  </div>
)
}
  
  export default CartWidget;