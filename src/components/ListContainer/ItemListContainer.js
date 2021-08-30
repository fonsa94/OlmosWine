import ItemCount from "../Items/ItemCount";



const ItemListContainer = ()  => {


    return (     
        <>
         <ItemCount stock={10} initial={1} onAdd={(cantidad) => {console.log(cantidad)}} />
          </>      
   );
         
  }

  export default ItemListContainer