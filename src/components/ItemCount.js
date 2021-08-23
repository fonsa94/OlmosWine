import {useState} from "react"



const ItemCount = ({stock,initial,onAdd}) => {

   let [contador,setContador] = useState(initial)
   
     const sumar = () => {
    if (contador < stock){
     setContador(contador + 1)
    }
    }
     const restar = () => {
         if (contador > 1) {
     setContador(contador - 1)
    }
    }
     const agregar = () => {
     if(stock > 0) {
         onAdd(contador)
    }
    }
    if (stock > 0) {
    return(
        <div>
            <p>Vino Tinto Syrah :{contador}</p>
            <button onClick ={sumar}>+</button>
            <button onClick ={restar}>-</button>
            <button onClick ={agregar}>Agregar al carrito</button>
        </div>
    )
}else{
    return(
    <div>
    <p>Vino Tinto Syrah :{contador}</p>
    <button onClick ={sumar}>+</button>
    <button onClick ={restar}>-</button>
    <button disabled>Agregar al carrito</button>
</div>
)
}
}

export default ItemCount;