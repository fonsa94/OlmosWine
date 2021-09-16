import React, {useEffect ,useState} from "react"


const promiseEjercicio = () => {
    return new Promise ((resolve,reject) => {
    setTimeout (
        () =>
        resolve([
           { id:"1",nombre:"vino tinto Malbec",precio:"250", destacado:true },
           { id:"2",nombre:"vino tinto Rose",precio:"320", destacado:true },
           { id:"3",nombre:"vino tinto Syrah",precio:"450", destacado:false },
           { id:"4",nombre:"vino tinto Bonarda",precio:"210", destacado:true },
           { id:"5",nombre:"vino tinto Pinot Noir",precio:"180", destacado:false },
           { id:"6",nombre:"vino tinto Caberet Souvignon",precio:"550", destacado:true },
           { id:"7",nombre:"vino tinto Tannat",precio:"450", destacado:false },
           
        ]),
        2000
    );
    });
};


  export const ItemList = () =>{

   const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
       promiseEjercicio().then((data)=>{
          let aux = data.filter(producto =>producto.destacado)
         setDataToShow(aux);
        }
        )
    }, [])


    return dataToShow.length === 0 ? (
            <h1>Espere...</h1>
        ) : (
            <ul>
               {dataToShow.map((element) => (
                   <li key={element.id}>{element.nombre}</li>
               ))}
            </ul>
       );  
  };

  export default ItemList