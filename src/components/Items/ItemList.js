import React, {useEffect ,useState} from "react"
import Item from "../Items/item"

const ItemList = ({ items }) => {
    return (
        <div className='itemListContainer'>
            {items.length === 0 ? (

                <p className='itemListLoading'>Estamos cargando el listado</p>
            ) : (

                items.map(i => {
                    return <Item item={i} key={i.id} />
                })
            )}
        </div>
    );
};

export default ItemList