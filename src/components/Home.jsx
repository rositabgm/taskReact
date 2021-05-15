import React, { useState } from 'react'
import ListaPropiedades from './ListaPropiedades'
import '../styles/home.css'
import FiltrarPropiedad from './FiltrarPropiedad'


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
            
            <FiltrarPropiedad data={props.data}/>
        </div>
    )
}

export default Home
