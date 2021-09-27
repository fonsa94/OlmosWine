import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import ItemList from './ItemList'

import Products from './../data/Products.json'

const productList = Products;

const ItemListContainer = ({ greeting }) => {

    const[items, setItems] = useState(null);
    const[dataLoaded, setDataLoaded] = useState(false);
    const { categoryId } = useParams();

    
    useEffect(() => {
        setDataLoaded(false);

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                let products = (categoryId) ? productList.filter(product => product.categoryId == categoryId) : [...productList];
                
                console.log(products);
                resolve(products);
            }, 2000);
        })
        .then((data) => {
            setItems(data);
            setDataLoaded(true); 
        });
    }, [categoryId]);
    

    return(
        <>
            {
                dataLoaded || 
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            }
            
            <div className="container text-center item-list-container">
                <div className="row">
                    <div className="col s12 m12 page-title">{ greeting }</div>
                    <br />
                    <div className="col s12 m12">
                        { dataLoaded && <ItemList items={items}/> }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;