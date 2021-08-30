import React, {useEffect ,useState} from "react"



const URL_API_WINES = "https://mocki.io/v1/4330c9e7-1175-4f0b-8503-2c0903ce070d"

const id = "1";
 
export const ItemDetailContainer = () =>{
    

    const [dataToShow, setDataToShow] = useState([]);
    
useEffect(() => {
    fetch(URL_API_WINES)
    .then(response => response.json())
    .then((data)=>{
        const aux = data.find(element => element.id === id)
        setDataToShow(aux);
    }); 
}, []);


return (
   <> 
  {dataToShow.length === 0 ? (
       
      <h1>Espere...</h1>
  ) : (
    
    <div >
    {dataToShow ? (<div className="card card-body text-center">
        <img src={dataToShow.image} className="card-img-top img-fluid m-auto " style={{width: 120}} />
        <br />
        <h3 style={{color:'black'}}>{dataToShow.title}</h3>
        <code style={{fontSize:22}}>${dataToShow.price}</code>
        <button className="btn btn-success">Buy / Comprar</button>
        </div>) : (<h4>Select Item / Seleccione un producto</h4>)}
</div>
  )}
  </>
);
  }

     
  