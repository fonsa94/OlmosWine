import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import ItemDetail from './itemDetail'
import Products from './../data/Products.json'

const productsList = Products;

const ItemDetailContainer = () => {

    const[item, setItem] = useState(null);
    const[dataLoaded, setDataLoaded] = useState(false);

    const { itemId } = useParams();

    useEffect(() => {
       
        const getProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                let product = productsList.find(product => product.id == itemId);

                resolve(product);
            }, 2000);
        })
        .then((data) => {
            setItem(data);
            setDataLoaded(true); 
        });
    });
    

    return(
        <>
            {
                dataLoaded || 
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            }
            
            <div className="container">
                { dataLoaded && <ItemDetail item={item}/> }
            </div>
        </>
    )
}

export default ItemDetailContainer;

// https://mocki.io/v1/2e6d5b66-7433-464b-ad4c-c0c677e1dbe7"