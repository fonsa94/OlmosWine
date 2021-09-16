import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutPagina from "../LayoutPagina/LayoutPagina";
import { ItemList } from "../Items/ItemList";
const  ItemListContainer =() => {

  const [productos, setProductos] = useState([])
  const {id} = useParams()

  useEffect(()=>{

      setTimeout(()=>{
        fetch("https://mocki.io/v1/6038e3db-8dec-4acb-9547-2432a4b49584").then(
          async (response) => {
            try {
              const data = await response.json();
              setProductos(data);
            } catch (error) {
              console.log("Error!");
              console.error(error);
            }
          }
        );
      }, 2500);
    }, []);

   

  return (
    <LayoutPagina titulo="Catalogo">
      return (
    <div className="item-list-container row px-0 mx-0 my-5">
      {productos.length === 0 ? (
        <div className="loadingMsg">
          <p>
            cargando productos...
            <br /> <span className="loadingMsg_Logo">Vinoteca Olmos.</span>
          </p>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
  
    </LayoutPagina>
  );
}

export default ItemListContainer