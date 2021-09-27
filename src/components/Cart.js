import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "../../src/context/CartContext"
import M from "materialize-css"
import { getFirestore } from '../firebase'

const db = getFirestore();
const itemCollection = db.collection('orders');

const Cart = () => {

    const { cart, removeItem, clearCart, cartSize } = useContext(CartContext); 
    const[totalPrice, setTotalPrice] = useState(0);
    const[pageLoaded, setPageLoaded] = useState(false);

    const[fullName, setFullName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[formMsg, setFormMsg] = useState("");

    const[orderId, setOrderId] = useState("");


    useEffect(() => {
        let sum = 0;
        cart.map(obj => {
            sum += (obj.item.price * obj.quantity);
        });

        setTotalPrice(sum);

        if(!pageLoaded)
        {
            let elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {inDuration: 300, outDuration: 225});

            setPageLoaded(true);
        }
    }, [cart]);

    const removeItemHandler = (id) => {
        removeItem(id);
    }
    const clearCartHandler = () => {
        clearCart();
    }

    const sendOrder = (order, callback) => {
        
        itemCollection.add(order)
        .then((res) => {
            let elem = document.getElementById("order-info-modal");
            let modalInstance = M.Modal.getInstance(elem);

            console.log(`Order added with Id: ${res.id}`);
            setOrderId(res.id);
            clearCart();
            setFullName("");
            setEmail("");
            setPhone("");
            callback();
            modalInstance.open();
        })
        .catch((error) => {
            console.error(`Error adding order: ${error}`);
        });
    };

    const sendBuyerInfo = () => {
        let elem = document.getElementById("buyer-info-modal");
        let modalInstance = M.Modal.getInstance(elem);
        let numberPattern = /^\d+$/;

        if(fullName === "" || email === "" || phone === "")
        {
            setFormMsg("Los Campos no pueden estar vacios.");
            return;
        }

        
        if(email.indexOf("@") === -1)
        {
            setFormMsg("Email no valido.vuelva a escribirlo");
            return;
        }


       
        if(!numberPattern.test(phone))
        {
            setFormMsg("Telefono no valido. solo puede contener numeros");
            return;
        }

        let items = cart.map(obj => {
            return {
                'id': obj.item.id,
                'title': obj.item.title,
                'price': obj.item.price
            };
        });

        let order = {
            'buyer': {
                'name': fullName,
                'email': email,
                'phone': phone
            },
            'items': items,
        
            'total': totalPrice
        }

        sendOrder(order, () => { modalInstance.close() });
        return null;
    }

    const closeOrderInfo = () => {
        let elem = document.getElementById("order-info-modal");
        let modalInstance = M.Modal.getInstance(elem);

        modalInstance.close();
        setOrderId("");
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 text-center">
                    <h1>Finalice su compra!</h1>

                </div>

                <div id="order-info-modal" className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="col s12">
                                        <h4>Informacion de la Orden</h4>
                                        <p>Su orden se ha realizado correctamente. tu ID personal es: {orderId}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={ closeOrderInfo } className="waves-effect waves-green btn">Enviar</button>
                    </div>
                </div>

                <div id="buyer-info-modal" className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="col s12">
                                        <h4>Infromacion del Comprador</h4>
                                        <p>Para finalizar la compra necesitamos la siguiente informacion </p>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input  id="full_name" type="text" className="validate"  onChange={e => setFullName(e.target.value)} />
                                        <label htmlFor="full_name">Nombre Completo</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">mail</i>

                                        <input  id="email" type="email" className="validate" onChange={e => setEmail(e.target.value)} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">cellphone</i>
                                        <input  id="number" type="text" className="validate" onChange={e => setPhone(e.target.value)}/>
                                        <label htmlFor="number">Telefono</label>
                                    </div>
                                    <div className="col s12 text-center">
                                        <p><strong>{ formMsg }</strong></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={ sendBuyerInfo } className="waves-effect waves-green btn">Enviar!</button>
                    </div>
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
                                                    <p>Cantidad: { obj.quantity } <br />
                                                        Precio: ${ obj.quantity * obj.item.price }
                                                    </p>
                                                    <button 
                                                        className="secondary-content waves-effect waves-light btn"
                                                        onClick={ () => removeItemHandler(obj.item.id) }
                                                    >
                                                        <i className="material-icons">delete_forever</i>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col s12 m12 text-center" style={{ paddingBottom: "25px"}}>
                                <h5> Precio Total: ${ totalPrice }</h5>
                                <button data-target="buyer-info-modal" className="btn waves-effect waves-light modal-trigger">Comprar!</button>
                            </div>


                        </>

                    :
                        <div className="col s12 m12 text-center" style={{ paddingBottom: "25px"}}>
                            <hr></hr>
                            <h4>No hay Items en el carrito!.</h4>
                            <Link to={"/"} className="waves-effect waves-light btn" >Mira nuestros productos</Link> 


                        </div>


                }
            </div>
        </div>
    )
}
export default Cart;