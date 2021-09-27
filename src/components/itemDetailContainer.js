import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getFirestore } from './../firebase/index';
import ItemDetail from './itemDetail'


const db = getFirestore();
const itemCollection = db.collection('items');

const ItemDetailContainer = () => {

    const[item, setItem] = useState(null);
    const[dataLoaded, setDataLoaded] = useState(false);

    const { itemId } = useParams();

    useEffect(() => {
       
        let callback = (doc) => {
            let data;

            if (!doc.exists) {
                console.log('No results');
                setDataLoaded(true);
            }
            else
            {
                data = doc.data();
                data.id = doc.id;
            }

            console.log(data);
            setItem(data);
            setDataLoaded(true);
        };

        if(itemId)
            itemCollection.doc(itemId).get().then(callback);

    }, [itemId]);

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

