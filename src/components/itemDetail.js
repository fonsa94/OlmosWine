import { useContext, useState, useEffect } from 'react'
import CartContext from './../context/CartContext'
import ItemCount from './itemCount'
import { NavLink, Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {
    const { cart, addItem, isInCart } = useContext(CartContext);

    const[addedToCart, setAddedToCart] = useState(false);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };

    useEffect(() => {
        let value = isInCart(item.id);

        setAddedToCart(value);
            
    }, [cart]);

    return(
        <div className="row item-detail">
            { 
                item ?
                <>
                    <div className="col s12 m12 item-breadcrums">
                        <label>
                            <NavLink  to={"/"} activeClassName="item-breadcrum-selected">Productos</NavLink> &gt;
                            <NavLink  to={`/category/${item.categoryId}`} activeClassName="item-breadcrum-selected"> {item.category} </NavLink> &gt;
                            <NavLink  to={`/item/${item.id}`} activeClassName="item-breadcrum-selected"> {item.title} </NavLink> 
                        </label>

                    </div>
                    <div className="col s12 m6 item-detail-picture-container">
                        <img className="item-detail-picture" src={item.pictureURL} />
                    </div>
                    <div className="col s12 m6 item-detail-info-container">
                        <label>{item.category}</label>
                        <h1 className="product-detail-title">{item.title}</h1>
                        <h3 className="product-detail-price">${item.price}</h3>

                        <h4 className="product-detail-description">Descripcion</h4>
                        <p>{item.description}</p>
                        <div className="col s12 m8 offset-m2 text-center">
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                            {
                                addedToCart && <Link to={"/cart"} className="waves-effect waves-light btn item-count-btn" >Finalizar Compra</Link>
                            }
                        </div>
                    </div>
                </>
                :
                    <div className="col s12 m12 text-center">
                        <h1>Producto no encontrado!</h1>
                    </div>
            }
        </div>
        
    )
}

export default ItemDetail;

