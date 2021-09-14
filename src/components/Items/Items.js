import React from 'react'
import { Item } from './ItemList'

export const ItemList = ({items=[]}) => {


    return (
        <div className="flex ">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}

export default ItemList