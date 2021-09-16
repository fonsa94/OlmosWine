import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {contexto} from "./contexto"

const Items = ({producto}) => {

  const {productos,addProduct} =useContext (contexto)

    return (
        <article className="flex ">
            <h1>{producto.title}</h1>
           <button onClick={()=>addProduct()}>Agregar Producto</button>
           <Link to={ `/Items/${producto.id}`}>Ver mas</Link> 
        </article>
    )
}

export default Items