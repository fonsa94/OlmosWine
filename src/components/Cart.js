import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "../../src/context/CartContext"
const Cart = () => {

    const { cart, removeItem, clearCart, cartSize } = useContext(CartContext); 
    const[totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let sum = 0;
        cart.map(obj => {
            sum += (obj.item.price * obj.quantity);
        });

        setTotalPrice(sum);
    }, [cart]);

    const removeItemHandler = (id) => {
        removeItem(id);
    }

    const clearCartHandler = () => {
        clearCart();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 text-center">
                    <h1>Terminar Tu Compra</h1>
                    
                </div>
                {
                    cartSize > 0 
                    ?
                        <>
                            <div className="col s12 m12 ">
                                <div className="col s12 offset-m11 m1 text-right" style={{ marginBottom: "10px"}}>
                                    <button 
                                        className="waves-effect waves-light btn"
                                        onClick={ clearCartHandler }
                                    >
                                        Limpiar
                                    </button>
                                    
                                </div>
                                <ul className="collection">
                                    {
                                        cart.map(obj => {
                                            return (
                                                <li key={ obj.item.id } className="collection-item avatar">
                                                    <img src={ obj.item.pictureURL } alt="" className="circle" />
                                                    <span className="title">{ obj.item.title }</span>
                                                    <p>unidades: { obj.quantity } <br />
                                                        Precio: ${ obj.quantity * obj.item.price }
                                                    </p>
                                                    <button 
                                                        className="secondary-content waves-effect waves-light btn"
                                                        onClick={ () => removeItemHandler(obj.item.id) }
                                                    >
                                                        <i class="material-icons">Borrar Todo</i>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col s12 m12 text-center" style={{ paddingBottom: "25px"}}>
                                <h5> Total: ${ totalPrice }</h5>
                                <button className="waves-effect waves-light btn">Comprar!</button>
                            </div>
                            
                        </>
                        
                    :
                        <div className="col s12 m12 text-center" style={{ paddingBottom: "25px"}}>
                            <hr></hr>
                            <h4>No tienes Items para comprar.</h4>
                            <Link to={"/"} className="waves-effect waves-light btn" >Mira tus productos!</Link> 
                        </div>
                }
            </div>
        </div>
    )
}

export default Cart;