import React, {useEffect ,useState} from "react"


const URL_API_WINES = "https://mocki.io/v1/30d6dc5d-0f6a-4a3b-b1aa-dfc8e87a570f"

const id ="1";
const cepa ="tinto";

 
export const ItemDetailContainer = () =>{
    

    const [dataToShow, setDataToShow] = useState([]);
    


useEffect(() => {
    fetch(URL_API_WINES)
    .then(response => response.json())
    .then((data)=>{
        const aux = data.filter(element=>element.cepa === cepa)
        setDataToShow(aux);
    }); 
}, []);


return (   
   <> 
  {dataToShow.length === 0 ? (
      <h1>
      cargando...
      </h1>     
  ) : (
    <ul>
    {dataToShow.map((dataToShow)=>(
<>
<br/>
  <div className="card card-body text-center">
  <img src={dataToShow.image} className="card-img-top img-fluid m-auto " style={{width: 120}} />
   <br />
   <h3 style={{color:'black'}}>{dataToShow.title}</h3>
   <h5 style={{fontSize:15}}>{dataToShow.descrip}</h5>
   <code style={{fontSize:22}}>${dataToShow.price}</code>
   <button className="btn btn-success">Buy / Comprar</button>
   </div>
</>
 ))}
</ul>
  )}
 </>
);
    };

    


    
  
      

   