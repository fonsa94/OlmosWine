import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from "../../context/cartContext"

const Item = ({producto}) => {

  const {productos,addProduct} =useContext (CartContext)

    return (
        <article className="flex ">
            <h1>{producto.title}</h1>
           <button onClick={()=>addProduct()}>Agregar Producto</button>
           <Link to={ `/Items/${producto.id}`}>Ver mas</Link> 
        </article>
    )
}

export default Item