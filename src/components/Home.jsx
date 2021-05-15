import React, { useState } from 'react'
import ListaPropiedades from './ListaPropiedades'
import '../styles/home.css'
import FiltrarPropiedad from './FiltrarPropiedad'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

const Home = (props) => {
    const [searchProp,setSearchProp] = useState("");
    return (
        <div className="container-home">
            <div className="container-title">
                <span className="title-header">{props.title}</span>
                <span className="count">{`${props.data.length}+ stays`}</span>
                <input className="search-input" type= "search" placeholder="Buscar por ciudad.." 
                onChange= {(event)=> {
                    setSearchProp(event.target.value)
                }} />
            </div>
            
            <div className="lista-propiedades">
            {
                props.data.filter((element)=>{
                    console.log(element.city);
                    if(searchProp == ""){
                        return element;
                    }else if (element.city.toLowerCase().includes(searchProp.toLowerCase())){
                        return element;
                    }
                }).map((element,key) => {
                    return(
                        <Propiedad data={element} key={key} />
                    )
                })
            }
            </div>

        </div>
    )
}

export default Home
