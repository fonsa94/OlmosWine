import React, { useEffect, useState } from "react";
// import {ItemCount} from './ItemCount'
import ItemList from "../Items/ItemList"

import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
         
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container ">
      Items de la categoria {categoryId}
      <ItemList items={items}/>
     
    </div>
  );
}