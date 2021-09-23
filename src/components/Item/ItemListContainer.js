// import "../ItemListContainer.css";
import { ItemList } from "./ItemList.js";
import { getFireStore } from "../../firebase"
import { useParams } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import {ProductData} from "../../data/ProductData.js";

export const ItemListContainer = () => {
  let { id } = useParams("0");
  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName] = useState("All");
     
     const getCategoryName = async () => {
      const db = getFireStore();
      var docRef = db.collection("categorias").doc(id);
     docRef.get().then((doc) => {
         if (doc.exists) {
             setCategoryName(doc.data().name);
         }
     }).catch((error) => {
         console.log("Error getting document:", error);
     });
 }

 const cargarDatos = () =>{
  let productos = ProductData;
  const db = getFireStore();
  var citiesRef = db.collection("items");

    console.log(productos)
    productos.map((producto) => (
    citiesRef.doc().set({
      category: producto.idCat ,
      name: producto.title,
      descripcion: producto.descripcion,
      price: producto.price,
      stock: producto.stock,
      picture:producto.picture })
    ))
 }

  const getProductos = async () => {
     const db = getFireStore();
     let itemCollection;
      if (id===undefined ){
      id = "0";
      }
      if ( id === "0"  ){
      itemCollection =db.collection("items");
     }else{
      itemCollection =db.collection("items").where("category", "==", `${id}`);
     }
     itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0){
       
      }
      let catalogo = querySnapshot.docs.map(doc => doc.data());
      let ids = querySnapshot.docs.map(doc => doc.id);
      for (let i= 0;i<catalogo.length;i++){
        catalogo[i].id = ids[i];
      }
      setItems(catalogo);
   }).catch((error)=> {console.log("Error searching items",error);}
    )
     
}

useEffect(() => {
    getCategoryName();
    getProductos();
  }, [id]);

  return (
    <div>
      <div className="ItemListContainer">
        {id == null && (
          <div className="header-title">
            <h3 className="W-title">Bourdeos Wine</h3>
          </div>
        )}
        {items ? (
          <Fragment>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">Inicio</li>
                <li className="breadcrumb-item active">Categorias</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {categoryName}
                </li>
              </ol>
            </nav>
            <ItemList items={items} />
          </Fragment>
        ) : (
          <h4>Todavia no tenemos articulos en venta</h4>
        )}
      </div>
    </div>
  );
};