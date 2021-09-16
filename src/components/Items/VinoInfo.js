import React,{useState,useEffect} from "react"

import { useParams } from "react-router-dom"


const Pais =(props) => {

    const [country , setCountry] =useState (0)
    const {id} = useParams()
    const getCountry = () =>{
        fetch ("https://mocki.io/v1/8853b4e0-0058-4ac0-93b4-bbb4c4a9df57")
        .then (response => response.json ())
        .then (response => {
            let paisSelected = response.filter((p) =>{return (p.code === parseInt(id))})
            setCountry(...paisSelected)

    })
}

useEffect (() => {
    getCountry()
})

return (  
    country === 0 ?
    (<p>Cargando</p>)
:
(<div>
    <p>{country.title}</p>
    <img src={country.image} width="500px" alt="" />
    <h1>{country.price}</h1>
    <h3>{country.descrip}</h3>
</div>)
)
}



export default Pais

