import React, {useState}from 'react'
import {ItemCount} from './ItemCount'
import {Link} from 'react-router-dom';

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const addHandler = (contador)=>{
        console.log('se agrego un item', contador)
        setCount(contador)
    }

    return <>
            {count}
            <img src={item?.imgage} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.descrip}</p>
            <div>${item?.price}</div>
            
            { count == 0 ?
                    <ItemCount stock="6" initial="2" onAdd={addHandler} />
                        :
                        <Link to='/cart'>
                            <button>Terminar mi compra</button>
                        </Link> 

            }
            

  </>;
   
  }