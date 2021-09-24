import React, { useState, useContext } from 'react'
import { ItemCount } from '../../components/Items/itemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0)
    const [hidden, setHidden] = useState(false)
    const { addItem } = useContext(CartContext)


    const onAdd = (quantity) => {
        setHidden(true) 
        setQuantity(quantity)
        addItem(item, quantity)
    }

    return (
        <div key={item.id} className='itemDetail-container'>
            <img className="itemDetail-img" src={item.pictureUrl} alt={`Prduct Detail Img from id: ${item.id}`} />
            <div className='itemDetail-info'>
                <p className="itemDetail-title">{item.title}</p>
                <p className="itemDetail-description">{item.description}</p>              
                <p className="itemDetail-price">AR$ {item.price}</p>
                <div className='ItemCount-container' hidden={hidden}>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
                <div className='btn-container' hidden={!hidden}>
                    <Link to='/cart'>
                        <button id='btnEnd'>Terminar mi compra</button>
                    </Link>
                    <Link to='/'>
                        <button id='btnContinue'>Continuar comprando</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail 


// "https://mocki.io/v1/8853b4e0-0058-4ac0-93b4-bbb4c4a9df57"