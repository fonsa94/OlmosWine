import React, { useState, useEffect } from 'react'
import  ItemDetail  from '../Items/ItemDetail'
import { useParams } from 'react-router'
import  Page  from '../pages/pagina'
import { productos } from '../../data/data'
import  NotFound  from '../../pages/notFound/notFound'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(undefined);
    const { itemId } = useParams();
    const [filtro, SetFiltro] = useState(1)
    var filtroProd = []
    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos.filter((i) => parseInt(itemId) === parseInt(i.id)));
                filtroProd = productos.filter((i) => parseInt(itemId) === parseInt(i.id));
                SetFiltro(filtroProd.length)
            }, 2000);
        })
        getItem.then((i) => {
            setItem(i[0])
        })
    }, [itemId])
    if (filtro === 0) {
        return (
            <NotFound />
        )
    } else {
        return (
            <Page>
                <div className='itemDetailContainer'>
                    {item === undefined ? (
                        <span className='loading'>Loading...</span>
                    ) : (
                        <ItemDetail key={item.id} item={item} />
                    )}

                </div>
            </Page>
        )
    }

}

export default ItemDetailContainer 


// https://mocki.io/v1/2e6d5b66-7433-464b-ad4c-c0c677e1dbe7"




