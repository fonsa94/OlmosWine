import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LayoutPagina from "../LayoutPagina/LayoutPagina";


const ItemDetailContainer = (props) => {

const [producto, setProducto] = useState (0)

const { variedades } = useParams ()

const getProducto =() =>{
    fetch("https://mocki.io/v1/2e6d5b66-7433-464b-ad4c-c0c677e1dbe7")
    .then(response => response.json())
    .then(response =>{
      
    let productos 
    if (variedades){
        productos = response.filter((p) => p.categoria === variedades)
    } else {
        productos = response 
    }
setProducto(productos)
    })
}

useEffect(() => {
    getProducto()
},[variedades])

return (  
    
        producto === 0 ? <div>Cargando Productos</div> :
       <div>
    <Link to="/productos/categorias/tinto" ><button> Vinos Tintos</button></Link>
    <Link to="/productos/categorias/blanco" ><button> Vinos Blancos</button></Link>
    {producto.map(item => {
        return (
            <LayoutPagina>
            <div className="card card-body text-center">     
           <Link to={"/productos/detalle/" + item.code}> <img src={item.image} className="card-img-top img-fluid m-auto " style={{width: 120}} />  </Link>         
             <br />
             <h3 style={{color:'black'}}>{item.title}</h3>
             <h5 style={{fontSize:15}}>{item.descrip}</h5>
             <code style={{fontSize:22}}>${item.price}</code>
             <button className="btn btn-success">Buy / Comprar</button>
             </div>
            </LayoutPagina>
             )
             
         })}
         </div>
           
    )
  
}
    
    
      


export default ItemDetailContainer







